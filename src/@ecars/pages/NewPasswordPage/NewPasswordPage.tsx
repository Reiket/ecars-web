import type {FC} from 'react';
import {Field, PasswordInput} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {newPasswordFormFieldsConfig} from '@ecars/pages/NewPasswordPage/constants';
import {useNewPasswordForm} from '@ecars/core/hooks/useNewPasswordForm';

export interface NewPasswordForm {
  password: string;
  confirmedPassword: string;
}

export const NewPasswordPage: FC = () => {
  const {form, isLoading, handleFormSubmit} = useNewPasswordForm();
  const {
    getValues,
    register,
    formState: {errors},
  } = form;
  const formFields = newPasswordFormFieldsConfig.map((field) => ({
    ...field,
    rules: field.rules(getValues),
  }));
  return (
    <AuthPage title="Check your email">
      <p className="auth__subtitle">Your new password must be different from your previously used passwords.</p>
      <AuthForm
        isLoading={isLoading}
        onSubmit={handleFormSubmit}
        isResetForm
        buttonText="Reset password"
      >
        {formFields.map((item) => (
          <Field
            label={item.label}
            error={errors[item.name]?.message}
          >
            <PasswordInput
              name={item.name}
              register={register(item.name, item.rules)}
              placeholder={item.placeholder}
            />
          </Field>
        ))}
      </AuthForm>
    </AuthPage>
  );
};
