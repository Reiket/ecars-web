import {confirmPassValidator, passwordValidator} from '@ecars/services/helpers/validators';
import type {UseFormGetValues} from 'react-hook-form';
import type {NewPasswordForm} from '@ecars/pages/NewPasswordPage/NewPasswordPage';

export interface NewPasswordFieldConfig {
  name: keyof NewPasswordForm;
  label: string;
  placeholder: string;
  rules: (getValues: UseFormGetValues<NewPasswordForm>) => object;
}

export const newPasswordFormFieldsConfig: NewPasswordFieldConfig[] = [
  {
    name: 'password',
    label: 'Password',
    placeholder: 'New password',
    rules: () => passwordValidator,
  },
  {
    name: 'confirmedPassword',
    label: 'Confirm new password',
    placeholder: 'Confirm password',
    rules: (getValues) => confirmPassValidator(getValues, 'password'),
  },
];
