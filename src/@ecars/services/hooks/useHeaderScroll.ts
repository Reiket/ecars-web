import {useEffect, useState} from 'react';

interface HeaderScrollResult {
  isSticky: boolean;
  showHeader: boolean;
}

export const useHeaderScroll = (): HeaderScrollResult => {
  const [isSticky, setIsSticky] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const topbarHeight = 46;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }
      setIsSticky(currentScrollY > topbarHeight);

      setLastScrollY(currentScrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return {isSticky, showHeader};
};
