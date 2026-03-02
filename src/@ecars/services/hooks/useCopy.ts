import {useState, useEffect, useCallback} from 'react';

interface UseCopyOptions {
  resetInterval?: number;
}
interface UseCopyResult {
  isCopied: boolean;
  copy: (text: string) => Promise<boolean>;
}

export const useCopy = ({resetInterval = 5000}: UseCopyOptions = {}): UseCopyResult => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, resetInterval);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isCopied, resetInterval]);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    return true;
  }, []);

  return {isCopied, copy};
};
