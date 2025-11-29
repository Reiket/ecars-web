import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import {useForgotPasswordMutation} from '@ecars/core/slices/api/authApiSlice';
import {useNavigate} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {toast} from 'react-toastify';
import type {FormEvent} from 'react';
import type {UseAuthFormReturn} from '@ecars/core/types/types';

export interface ResetPasswordForm {
  email: string;
}

export const useResetPasswordForm = (): UseAuthFormReturn<ResetPasswordForm> => {
  const form = useForm<ResetPasswordForm>();
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
