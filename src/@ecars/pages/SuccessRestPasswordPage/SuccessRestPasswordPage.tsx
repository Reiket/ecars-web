import type {FC} from 'react';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {Button} from 'ecars-web-lib';
import {useNavigate} from 'react-router-dom';

export const SuccessRestPasswordPage: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    void navigate(PageUrls.LOGIN);
  };
  return (
    <AuthPage title="Password has been reset">
      <p className="auth__subtitle">Your password has been successfully reset. Click the button below to log in.</p>
      <Button
        onClick={handleClick}
        size="big"
        color="green"
      >
        Back to login
      </Button>
    </AuthPage>
  );
};
