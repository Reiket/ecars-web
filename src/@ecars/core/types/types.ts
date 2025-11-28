import type {FieldValues, UseFormReturn} from 'react-hook-form';
import type {FormEvent} from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface ServerErrorResponse {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details?: Record<string, unknown>;
  };
}

export interface UseAuthFormReturn<T extends FieldValues> {
  form: UseFormReturn<T>;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void> | void;
  isLoading: boolean;
}
