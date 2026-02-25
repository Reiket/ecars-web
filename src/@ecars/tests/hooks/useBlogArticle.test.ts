import {renderHook} from '@testing-library/react';
import {useParams} from 'react-router-dom';
import {useGetBlogArticleByIdQuery} from '@ecars/core/slices/api/blogApiSlice';
import {BLOG_ARTICLE_PARAMS} from '@ecars/uiKit/BlogArticle/constants';
import {useBlogArticle} from '@ecars/core/hooks/useBlogArticle';
import {defaultMutationState} from '@ecars/services/__mocks__/tests';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('@ecars/core/slices/api/blogApiSlice', () => ({
  useGetBlogArticleByIdQuery: vi.fn(),
}));

describe('useBlogArticle hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should return article data and call query with id when present', () => {
    const mockArticleData = {category: 'NEWS', title: 'Test Article'};

    vi.mocked(useParams).mockReturnValue({id: '123'});
    vi.mocked(useGetBlogArticleByIdQuery).mockReturnValue({
      ...defaultMutationState,
      data: {data: mockArticleData},
      isLoading: false,
    });

    const {result} = renderHook(() => useBlogArticle());

    expect(useGetBlogArticleByIdQuery).toHaveBeenCalledWith({id: '123', ...BLOG_ARTICLE_PARAMS}, {skip: false});
    expect(result.current).toEqual({
      id: '123',
      articleData: mockArticleData,
      currentCategory: 'NEWS',
      isLoading: false,
    });
  });

  test('should skip query and return undefined data when id is missing', () => {
    vi.mocked(useParams).mockReturnValue({});
    vi.mocked(useGetBlogArticleByIdQuery).mockReturnValue({
      ...defaultMutationState,
      data: undefined,
      isLoading: false,
    });

    const {result} = renderHook(() => useBlogArticle());

    expect(useGetBlogArticleByIdQuery).toHaveBeenCalledWith({id: '', ...BLOG_ARTICLE_PARAMS}, {skip: true});
    expect(result.current).toEqual({
      id: undefined,
      articleData: undefined,
      currentCategory: undefined,
      isLoading: false,
    });
  });

  test('should handle loading state correctly', () => {
    vi.mocked(useParams).mockReturnValue({id: '123'});
    vi.mocked(useGetBlogArticleByIdQuery).mockReturnValue({
      ...defaultMutationState,
      data: undefined,
      isLoading: true,
    });

    const {result} = renderHook(() => useBlogArticle());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.articleData).toBeUndefined();
  });
});
