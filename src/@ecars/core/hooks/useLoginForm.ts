import type {SubmitHandler, UseFormReturn} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {useLoginMutation} from '@ecars/core/slices/api/authApiSlice';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {useNavigate} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import type {FormEvent} from 'react';

export interface LoginForm {
  email: string;
  password: string;
}
interface UseLoginFormReturn {
  form: UseFormReturn<LoginForm>;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> | void;
  isLoading: boolean;
}

export const useLoginForm = (): UseLoginFormReturn => {
  const form = useForm<LoginForm>({
    mode: 'onChange',
  });

  const [login, {isLoading}] = useLoginMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      await login(data).unwrap();
      await navigate(PageUrls.ACCOUNT);
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
    isLoading,
    handleFormSubmit,
  };
};
