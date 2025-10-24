import type {FC} from 'react';
import {Field, PasswordInput} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';

export const SetNewPasswordPage: FC = () => {
  return (
    <AuthPage title="Check your email">
      <p className="auth__subtitle">Your new password must be different from your previously used passwords.</p>
      <AuthForm
        isResetForm
        buttonText="Reset password"
      >
        <Field label="New password">
          <PasswordInput placeholder="New password" />
        </Field>
        <Field label="Confirm password">
          <PasswordInput placeholder="Confirm password" />
        </Field>
      </AuthForm>
    </AuthPage>
  );
};
