import type {FC} from 'react';
import {Checkbox, Field, Input, PasswordInput, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';

export const RegistrationPage: FC = () => {
  return (
    <AuthPage title="Sign Up">
      <AuthForm
        buttonText="Sign Up"
        text="Already have an account?"
        linkConfig={{to: PageUrls.LOGIN, label: 'Login'}}
      >
        <Field label="Full name">
          <Input placeholder="John Doe" />
        </Field>
        <Field label="Email address">
          <Input placeholder="example@mail.com" />
        </Field>
        <Field label="Password">
          <PasswordInput placeholder="Your password" />
        </Field>
        <Field label="Confirm password">
          <PasswordInput placeholder="Re-type password" />
        </Field>
        <div className="auth__checkbox-block">
          <Checkbox />
          <p>
            I agree to the{' '}
            <RouterLink
              to={PageUrls.TERMS}
              color="green"
            >
              Terms of Service
            </RouterLink>{' '}
            and{' '}
            <RouterLink
              color="green"
              to={PageUrls.PRIVACY}
            >
              Privacy Policy
            </RouterLink>
          </p>
        </div>
      </AuthForm>
    </AuthPage>
  );
};
