import {useState, useCallback, useEffect} from 'react';
import {bodyOverflow} from '@ecars/services/helpers/helpers';

interface UsePopupResult {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleToggleOpen: () => void;
}

export const usePopup = (): UsePopupResult => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleToggleOpen = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);
  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      handleClose();
    }
  };
  useEffect(() => {
    bodyOverflow(isOpen);
    document.addEventListener('keydown', handleEscKeyPress);
    return () => {
      bodyOverflow(false);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen]);
  return {isOpen, handleOpen, handleClose, handleToggleOpen};
};
