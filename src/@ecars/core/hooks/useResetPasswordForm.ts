import {useForm} from 'react-hook-form';
import type {SubmitHandler, UseFormReturn} from 'react-hook-form';
import {useForgotPasswordMutation} from '@ecars/core/slices/api/authApiSlice';
import {useNavigate} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {toast} from 'react-toastify';
import type {FormEvent} from 'react';
import type {ResetPasswordForm} from '@ecars/pages/ResetPasswordPage/ResetPasswordPage';

interface UseResetPasswordFormReturn {
  form: UseFormReturn<ResetPasswordForm>;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> | void;
  isLoading: boolean;
}

export const useResetPasswordForm = (): UseResetPasswordFormReturn => {
  const form = useForm<ResetPasswordForm>({
    mode: 'onChange',
  });
  const [forgotPassword, {isLoading}] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    try {
      await forgotPassword(data).unwrap();
      await navigate(PageUrls.CHECK_EMAIL, {state: {email: data.email}});
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      toast.error(message);
    }
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    return form.handleSubmit(onSubmit)(e);
  };
  return {form, handleFormSubmit, isLoading};
};
