import type {SubmitHandler} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useResetPasswordMutation} from '@ecars/core/slices/api/authApiSlice';
import type {FormEvent} from 'react';
import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {PageUrls} from '@ecars/constants/page-urls';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {TOAST_MESSAGES} from '@ecars/constants/toast-messages';
import type {UseAuthFormReturn} from '@ecars/core/types/types';

export interface NewPasswordForm {
  password: string;
  confirmedPassword: string;
}

const PARAMS_CODE = 'code';

export const useNewPasswordForm = (): UseAuthFormReturn<NewPasswordForm> => {
  const form = useForm<NewPasswordForm>({mode: 'onChange'});
  const [searchParams] = useSearchParams();
  const code = searchParams.get(PARAMS_CODE);
  const navigate = useNavigate();
  const [resetPassword, {isLoading}] = useResetPasswordMutation();

  useEffect(() => {
    if (!code) {
      toast.error(TOAST_MESSAGES.MISSING_CODE);
      void navigate(PageUrls.LOGIN);
    }
  }, [code, navigate]);
  const onSubmit: SubmitHandler<NewPasswordForm> = async (data) => {
    if (!code) {
      return;
    }

    try {
      await resetPassword({
        code: code,
        password: data.password,
        passwordConfirmation: data.confirmedPassword,
      }).unwrap();

      toast.success(TOAST_MESSAGES.SUCCESS_REST_PASS);
      void navigate(PageUrls.SUCCESS_REST_PASS);
    } catch (err: unknown) {
      const message = getErrorMessage(err);
      toast.error(message);
    }
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    return form.handleSubmit(onSubmit)(e);
  };
  return {form, isLoading, handleFormSubmit};
};
