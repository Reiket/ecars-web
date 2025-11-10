interface ErrorWithMessage {
  message: string;
}

interface ServerError {
  error: {
    status: number;
    name: string;
    message: string;
    details: Record<string, unknown>;
  };
  data: unknown;
}

export const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

export const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) {
    return maybeError;
  }

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error != null && 'data' in error && typeof error.data === 'object') {
    const data = (error as {data: ServerError}).data;

    return data.error.message;
  }

  if (typeof error === 'object' && error != null && 'message' in error && typeof error.message === 'string') {
    return (error as {message: string}).message;
  }

  return String(error);
};
