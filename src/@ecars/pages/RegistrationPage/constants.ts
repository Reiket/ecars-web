import {Input, PasswordInput} from 'ecars-web-lib';
import {
  confirmPassValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '@ecars/services/helpers/validators';
import type {UseFormGetValues} from 'react-hook-form';

export interface RegisterFieldConfig {
  name: keyof Omit<RegistrationForm, 'isAgree'>;
  label: string;
  placeholder: string;
  component: typeof Input | typeof PasswordInput;
  rules: (getValues: UseFormGetValues<RegistrationForm>) => object;
}

export interface RegistrationForm {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
  isAgree: boolean;
}

export const registrationFormFieldsConfig: RegisterFieldConfig[] = [
  {
    name: 'name',
    label: 'Full name',
    placeholder: 'John Doe',
    component: Input,
    rules: () => nameValidator,
  },
  {
    name: 'email',
    label: 'Email address',
    placeholder: 'example@mail.com',
    component: Input,
    rules: () => emailValidator,
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Your password',
    component: PasswordInput,
    rules: () => passwordValidator,
  },
  {
    name: 'confirmedPassword',
    label: 'Confirm password',
    placeholder: 'Re-type password',
    component: PasswordInput,
    rules: (getValues) => confirmPassValidator(getValues, 'password'),
  },
];
