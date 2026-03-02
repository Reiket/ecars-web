import {renderHook} from '@testing-library/react';
import {useGetBlogArticlesQuery} from '@ecars/core/slices/api/blogApiSlice';
import {BLOG_QUERY_PARAMS} from '@ecars/uiKit/Blog/constants';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {defaultMutationState} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/slices/api/blogApiSlice', () => ({
  useGetBlogArticlesQuery: vi.fn(),
}));

describe('useBlog hook', () => {
  const mockBlogQuery = (overrides = {}) => {
    vi.mocked(useGetBlogArticlesQuery).mockReturnValue({
      ...defaultMutationState,
      data: undefined,
      isLoading: false,
      isSuccess: true,
      ...overrides,
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should call API with correct params and return data', () => {
    const mockData = [{id: 1, title: 'Test Article'}];
    mockBlogQuery({data: mockData});

    const {result} = renderHook(() => useBlog(BLOG_QUERY_PARAMS));
    expect(useGetBlogArticlesQuery).toHaveBeenCalledWith(BLOG_QUERY_PARAMS, undefined);
    expect(result.current).toEqual({
      isLoading: false,
      data: mockData,
    });
  });

  test('should pass options (like skip) to the API slice', () => {
    mockBlogQuery();
    const options = {skip: true};

    renderHook(() => useBlog(BLOG_QUERY_PARAMS, options));

    expect(useGetBlogArticlesQuery).toHaveBeenCalledWith(BLOG_QUERY_PARAMS, options);
  });

  test('should accurately reflect the loading state', () => {
    mockBlogQuery({isLoading: true, isSuccess: false});

    const {result} = renderHook(() => useBlog(BLOG_QUERY_PARAMS));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });
});
