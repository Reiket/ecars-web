import type {FC} from 'react';
import {Field, Icons, Input, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {useResetPasswordForm} from '@ecars/core/hooks/useResetPasswordForm';

export const ResetPasswordPage: FC = () => {
  const {handleFormSubmit, form, isLoading} = useResetPasswordForm();
  return (
    <AuthPage title="Forgot password">
      <p className="auth__subtitle">No worries, we'll send you reset instructions.</p>
      <AuthForm
        onSubmit={handleFormSubmit}
        isResetForm
        buttonText="Reset password"
        isLoading={isLoading}
      >
        <Field label="Email address">
          <Input
            name="email"
            register={form.register('email')}
            placeholder="example@mail.com"
          />
        </Field>
      </AuthForm>
      <RouterLink
        to={PageUrls.LOGIN}
        color="green"
      >
        <Icons.ArrowNarrowLeft /> Back to login
      </RouterLink>
    </AuthPage>
  );
};
