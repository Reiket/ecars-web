import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export const useSuccessRestPassword = <T>(validationFn: (state: T | null) => boolean, redirectTo: string): T | null => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as T | null;

  useEffect(() => {
    if (!validationFn(state)) {
      void navigate(redirectTo, {replace: true});
    }
  }, [navigate, state, validationFn, redirectTo]);

  return state;
};
