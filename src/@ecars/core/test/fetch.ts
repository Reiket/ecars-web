import {vi, beforeEach, afterAll} from 'vitest';

export const mockFetch = vi.fn();

export const setupFetchMocks = () => {
  vi.stubGlobal('fetch', mockFetch);

  beforeEach(() => {
    mockFetch.mockReset();
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });
};

export const mockFetchSuccess = (body: unknown, status = 200) => {
  mockFetch.mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: {'Content-Type': 'application/json'},
    }),
  );
};

export const mockFetchFailure = (body: unknown = {message: 'Error'}, status = 401) => {
  mockFetch.mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: {'Content-Type': 'application/json'},
    }),
  );
};
