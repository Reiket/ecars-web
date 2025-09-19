import {useCallback, useState} from 'react';
import {bodyOverflow} from '@ecars/services/helpers/helpers';

interface UseBurgerResult {
  isBurgerActive: boolean;
  toggleBurger: () => void;
}

export const useBurger = (initialState = false): UseBurgerResult => {
  const [isBurgerActive, setIsBurgerActive] = useState(initialState);

  const toggleBurger = useCallback(() => {
    setIsBurgerActive((prev) => {
      const next = !prev;
      bodyOverflow(next);
      return next;
    });
  }, []);

  return {isBurgerActive, toggleBurger};
};
