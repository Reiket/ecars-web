import type {FC} from 'react';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {Button} from 'ecars-web-lib';
import {useNavigate} from 'react-router-dom';
import {useSuccessRestPassword} from '@ecars/core/hooks/useSuccessRestPassword';

interface LocationState {
  resetSuccess?: boolean;
}

export const SuccessRestPasswordPage: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    void navigate(PageUrls.LAYOUT, {replace: true});
  };
  useSuccessRestPassword<LocationState>((s) => !!s?.resetSuccess, PageUrls.LOGIN);
  return (
    <AuthPage title="Password has been reset">
      <p className="auth__subtitle">Your password has been successfully reset. Click the button below to main page.</p>
      <Button
        onClick={handleClick}
        size="big"
        color="green"
      >
        Back to main page
      </Button>
    </AuthPage>
  );
};
