import type {FC} from 'react';
import {Field, Icons, Input, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';

export const ResetPasswordPage: FC = () => {
  return (
    <AuthPage title="Forgot password">
      <p className="auth__subtitle">No worries, we'll send you reset instructions.</p>
      <AuthForm
        isResetForm
        buttonText="Reset password"
      >
        <Field label="Email address">
          <Input placeholder="example@mail.com" />
        </Field>
      </AuthForm>
      <RouterLink
        to={PageUrls.LOGIN}
        color="green"
      >
        {' '}
        <Icons.ArrowNarrowLeft /> Back to login
      </RouterLink>
    </AuthPage>
  );
};
