import {useRegisterMutation} from '@ecars/core/slices/api/authApiSlice';
import type {RegisterRequest} from '@ecars/core/api/auth-query';
import type {SubmitHandler, UseFormReturn} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import type {RegistrationForm} from '@ecars/pages/RegistrationPage/constants';
import type {FormEvent} from 'react';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {toast} from 'react-toastify';

interface UseRegistrationFormReturn {
  form: UseFormReturn<RegistrationForm>;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const useRegistrationForm = (): UseRegistrationFormReturn => {
  const [registerMutation, {isLoading}] = useRegisterMutation();
  const form = useForm<RegistrationForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    const credentials: RegisterRequest = {
      username: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      await registerMutation(credentials).unwrap();
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      toast.error(message);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    void form.handleSubmit(onSubmit)(e);
  };

  return {
    form,
    handleFormSubmit,
    isLoading,
  };
};
