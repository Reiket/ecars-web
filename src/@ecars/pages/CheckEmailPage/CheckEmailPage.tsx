import type {FC} from 'react';
import {Icons, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';

export const CheckEmailPage: FC = () => {
  return (
    <AuthPage title="Check your email">
      <p className="auth__subtitle">
        We sent a password reset link to <span>user777@gmail.com</span>
      </p>
      <AuthForm
        isResetForm
        buttonText="Open email app"
        text="Didn't receive the email?"
        linkConfig={{to: PageUrls.CHECK_EMAIL, label: 'Click to resend'}}
      />

      <RouterLink
        to={PageUrls.LOGIN}
        color="green"
      >
        <Icons.ArrowNarrowLeft /> Back to login
      </RouterLink>
    </AuthPage>
  );
};
