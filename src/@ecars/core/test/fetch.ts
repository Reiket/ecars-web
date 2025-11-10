import {vi, beforeEach, afterAll} from 'vitest';

export const mockFetch = vi.fn();

export const setupFetchMocks = (): void => {
  vi.stubGlobal('fetch', mockFetch);

  beforeEach(() => {
    mockFetch.mockReset();
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });
};

export const mockFetchSuccess = (body: unknown, status = 200): void => {
  mockFetch.mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: {'Content-Type': 'application/json'},
    }),
  );
};

export const mockFetchFailure = (body: unknown = {message: 'Error'}, status = 401): void => {
  mockFetch.mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: {'Content-Type': 'application/json'},
    }),
  );
};
