import {useRegisterMutation} from '@ecars/core/slices/api/authApiSlice';
import type {RegisterRequest} from '@ecars/core/api/auth-query';
import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import type {FormEvent} from 'react';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {toast} from 'react-toastify';
import type {UseAuthFormReturn} from '@ecars/core/types/types';
import {useNavigate} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import {TOAST_MESSAGES} from '@ecars/constants/toast-messages';

export interface RegistrationForm {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
  isAgree: boolean;
}

export const useRegistrationForm = (): UseAuthFormReturn<RegistrationForm> => {
  const [registerMutation, {isLoading}] = useRegisterMutation();
  const form = useForm<RegistrationForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    const credentials: RegisterRequest = {
      username: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      await registerMutation(credentials).unwrap();
      toast.success(TOAST_MESSAGES.SUCCESS_SIGN_UP);
      void navigate(PageUrls.ACCOUNT);
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      toast.error(message);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    return form.handleSubmit(onSubmit)(e);
  };

  return {
    form,
    handleFormSubmit,
    isLoading,
  };
};
