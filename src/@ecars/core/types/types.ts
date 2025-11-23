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
