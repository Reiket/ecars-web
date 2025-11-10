import type {FC} from 'react';
import {Checkbox, Field, RouterLink} from 'ecars-web-lib';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {AuthPage} from '@ecars/uiKit/Auth';
import {PageUrls} from '@ecars/constants/page-urls';
import {Controller} from 'react-hook-form';
import {registrationFormFieldsConfig} from '@ecars/pages/RegistrationPage/constants';
import {checkboxValidator} from '@ecars/services/helpers/validators';
import {useRegistrationForm} from '@ecars/core/hooks/useRegisterForm';
import {authFormConfig} from '@ecars/uiKit/Auth/constants';

export const RegistrationPage: FC = () => {
  const {handleFormSubmit, form, isLoading} = useRegistrationForm();
  const {
    register,
    control,
    formState: {errors},
    getValues,
  } = form;
  const formFields = registrationFormFieldsConfig.map((field) => ({
    ...field,
    rules: field.rules(getValues),
  }));

  return (
    <AuthPage title="Sign Up">
      <AuthForm
        isLoading={isLoading}
        onSubmit={handleFormSubmit}
        {...authFormConfig.registration}
      >
        {formFields.map(({name, label, placeholder, component: InputComponent, rules}) => (
          <Field
            key={name}
            label={label}
            error={errors[name]?.message}
          >
            <InputComponent
              name={name}
              register={register(name, rules)}
              placeholder={placeholder}
            />
          </Field>
        ))}
        <div className="auth__checkbox-block">
          <Field error={errors.isAgree?.message}>
            <Controller
              name="isAgree"
              control={control}
              rules={checkboxValidator}
              render={({field, fieldState}) => (
                <Checkbox
                  hasError={!!fieldState.error}
                  checked={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <p>
            I agree to the
            <RouterLink
              to={PageUrls.TERMS}
              color="green"
            >
              Terms of Service
            </RouterLink>
            and
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
