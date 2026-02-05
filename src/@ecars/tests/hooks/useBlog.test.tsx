import {describe, expect, test, vi, beforeEach} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useGetBlogArticlesQuery} from '@ecars/core/slices/api/blogApiSlice';
import {BLOG_QUERY_PARAMS} from '@ecars/uiKit/Blog/constants';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {defaultMutationState} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/slices/api/blogApiSlice', () => ({
  useGetBlogArticlesQuery: vi.fn(),
}));

describe('useBlog hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should call useGetBlogArticlesQuery with correct params and return data', () => {
    const mockData = {
      data: [{id: 1, title: 'Test', category: 'NEWS', imageUrl: {}, classnames: ''}],
    };
    vi.mocked(useGetBlogArticlesQuery).mockReturnValue({
      ...defaultMutationState,
      data: mockData,
      isLoading: false,
      isSuccess: true,
    });

    const {result} = renderHook(() => useBlog());

    expect(useGetBlogArticlesQuery).toHaveBeenCalledWith(BLOG_QUERY_PARAMS);
    expect(result.current).toEqual({
      isLoading: false,
      data: mockData,
    });
  });

  test('should handle loading state', () => {
    vi.mocked(useGetBlogArticlesQuery).mockReturnValue({
      ...defaultMutationState,
      data: undefined,
      isLoading: true,
    });

    const {result} = renderHook(() => useBlog());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });
});
