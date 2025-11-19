interface ServerError {
  data?: {
    error?: {
      status: number;
      name: string;
      message?: string;
      details: Record<string, unknown>;
    };
    data?: unknown;
  };
}

interface SimpleError {
  message?: unknown;
}

export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error != null) {
    const rtkMessage = (error as ServerError).data?.error?.message;
    if (typeof rtkMessage === 'string') {
      return rtkMessage;
    }
    const simpleMessage = (error as SimpleError).message;
    if (typeof simpleMessage === 'string') {
      return simpleMessage;
    }
  }
  return String(error);
};
