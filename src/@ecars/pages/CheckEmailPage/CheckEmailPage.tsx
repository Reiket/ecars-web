import type {FC} from 'react';
import {useEffect} from 'react';
import {Icons, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {useLocation, useNavigate} from 'react-router-dom';

interface LocationState {
  email?: string;
}
export const CheckEmailPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | null;
  const email = state?.email;

  useEffect(() => {
    if (!email) {
      void navigate(PageUrls.RESET_PASSWORD, {replace: true});
    }
  }, [email, navigate]);

  return (
    <AuthPage title="Check your email">
      <p className="auth__subtitle">
        We sent a password reset link to <span>{email}</span>
      </p>
      <AuthForm
        isResetForm
        text="Didn't receive the email?"
        linkConfig={{to: PageUrls.RESET_PASSWORD, label: 'Click to resend'}}
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
