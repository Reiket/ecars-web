import type {FC} from 'react';
import {Fragment} from 'react';
import {Field, Input, PasswordInput, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';

export const LoginPage: FC = () => {
  return (
    <AuthPage title="Login">
      <AuthForm
        buttonText="Login"
        text="Don’t have an account?"
        linkConfig={{to: PageUrls.REGISTRATION, label: 'Sign Up'}}
      >
        <Field label="Email address">
          <Input placeholder="example@mail.com"/>
        </Field>
        <Field label="Password">
          <Fragment>
            <RouterLink
              to={PageUrls.RESET_PASSWORD}
              color="green"
            >
              Forgot password?
            </RouterLink>
            <PasswordInput placeholder="Your password"/>
          </Fragment>
        </Field>
      </AuthForm>
    </AuthPage>
  );
};
