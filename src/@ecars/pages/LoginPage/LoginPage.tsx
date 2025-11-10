import type {FC} from 'react';
import {Fragment} from 'react';
import {Field, Input, PasswordInput, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {emailLoginValidator, passwordLoginValidator} from '@ecars/services/helpers/validators';
import {useLoginForm} from '@ecars/core/hooks/useLoginForm';
import {authFormConfig} from '@ecars/uiKit/Auth/constants';

export const LoginPage: FC = () => {
  const {handleFormSubmit, form, isLoading} = useLoginForm();
  const {
    register,
    formState: {errors},
  } = form;
  const {email, password} = errors;
  return (
    <AuthPage title="Login">
      <AuthForm
        isLoading={isLoading}
        onSubmit={handleFormSubmit}
        {...authFormConfig.login}
      >
        <Field
          label="Email address"
          error={email?.message}
        >
          <Input
            name="email"
            register={register('email', emailLoginValidator)}
            placeholder="example@mail.com"
          />
        </Field>

        <Field
          label="Password"
          error={password?.message}
        >
          <Fragment>
            <RouterLink
              to={PageUrls.RESET_PASSWORD}
              color="green"
            >
              Forgot password?
            </RouterLink>
            <PasswordInput
              hasError={!!password}
              name="password"
              register={register('password', passwordLoginValidator)}
              placeholder="Your password"
            />
          </Fragment>
        </Field>
      </AuthForm>
    </AuthPage>
  );
};
