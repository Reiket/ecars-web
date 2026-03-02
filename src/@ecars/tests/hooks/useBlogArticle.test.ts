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
  const MOCK_ID = '123';
  const MOCK_ARTICLE = {category: 'NEWS', title: 'Test Article'};

  const setupMocks = (id?: string, queryState = {}) => {
    vi.mocked(useParams).mockReturnValue(id ? {id} : {});
    vi.mocked(useGetBlogArticleByIdQuery).mockReturnValue({
      ...defaultMutationState,
      data: undefined,
      isLoading: false,
      ...queryState,
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should return article data and call query with id when present', () => {
    setupMocks(MOCK_ID, {
      data: {data: MOCK_ARTICLE},
      isSuccess: true,
    });

    const {result} = renderHook(() => useBlogArticle());

    expect(useGetBlogArticleByIdQuery).toHaveBeenCalledWith({id: MOCK_ID, ...BLOG_ARTICLE_PARAMS}, {skip: false});

    expect(result.current).toEqual({
      id: MOCK_ID,
      articleData: MOCK_ARTICLE,
      currentCategory: MOCK_ARTICLE.category,
      isLoading: false,
    });
  });

  test('should skip query and return undefined data when id is missing', () => {
    setupMocks();
    const {result} = renderHook(() => useBlogArticle());
    expect(useGetBlogArticleByIdQuery).toHaveBeenCalledWith({id: '', ...BLOG_ARTICLE_PARAMS}, {skip: true});

    expect(result.current.id).toBeUndefined();
    expect(result.current.articleData).toBeUndefined();
  });

  test('should handle loading state correctly', () => {
    setupMocks(MOCK_ID, {isLoading: true});

    const {result} = renderHook(() => useBlogArticle());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.articleData).toBeUndefined();
  });
});
