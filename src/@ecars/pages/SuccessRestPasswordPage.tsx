import type {FC} from 'react';
import {AuthPage} from '@ecars/uiKit/Auth';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';

export const SuccessRestPasswordPage: FC = () => {
  return (
    <AuthPage title="Password has been reset">
      <p className="auth__subtitle">Your password has been successfully reset. Click the button below to log in.</p>
      <AuthForm
        onSubmit={() => {
          /* empty */
        }}
        isResetForm
        buttonText="Login"
      />
    </AuthPage>
  );
};
