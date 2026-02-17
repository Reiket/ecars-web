import {renderHook} from '@testing-library/react';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {useBlogContent} from '@ecars/core/hooks/useBlogContent';
import type {BlogArticle} from '@ecars/core/types/types';
import type {GetBlogArticlesResponse} from '@ecars/core/api/blog-query';
import type {CategoriesListType} from 'ecars-web-lib';

vi.mock('@ecars/core/hooks/useBlog');

const createArticle = (category: CategoriesListType): BlogArticle => ({
  id: Math.random(),
  category,
  title: '',
  description: '',
  classnames: '',
  imageUrl: {formats: {thumbnail: {name: '', url: ''}}},
});

const mockResponse = (data: BlogArticle[], total = 0): GetBlogArticlesResponse => ({
  data,
  meta: {
    pagination: {total, page: 1, pageSize: 6, pageCount: Math.ceil(total / 6) || 1},
  },
});

describe('useBlogContent', () => {
  const defaultProps = {activeCategory: null, currentPage: 1, pageSize: 6};
  const mock = vi.mocked(useBlog);

  const categoriesData = [createArticle('news'), createArticle('guides'), createArticle('reviews')];

  beforeEach(() => vi.clearAllMocks());

  test('calculates categories and pagination', () => {
    mock
      .mockReturnValueOnce({data: mockResponse(categoriesData), isLoading: false})
      .mockReturnValueOnce({data: mockResponse([], 13), isLoading: false});

    const {result} = renderHook(() => useBlogContent(defaultProps));

    expect(result.current.categories).toEqual(['news', 'guides', 'reviews']);
    expect(result.current.pageCount).toBe(3);
    expect(result.current.pagesArray).toEqual([1, 2, 3]);
  });

  test.each([
    {cat: 'news', expected: {filters: {category: {$eq: 'news'}}}},
    {cat: null, expected: {}},
  ])('filters by $cat', ({cat, expected}) => {
    mock.mockReturnValue({data: undefined, isLoading: true});

    renderHook(() => useBlogContent({...defaultProps, activeCategory: cat}));

    expect(mock).toHaveBeenLastCalledWith(expect.objectContaining(expected));
  });

  test('manages loading states', () => {
    mock
      .mockReturnValueOnce({data: undefined, isLoading: true})
      .mockReturnValueOnce({data: undefined, isLoading: false});

    const {result} = renderHook(() => useBlogContent(defaultProps));

    expect(result.current.isCategoriesLoading).toBe(true);
    expect(result.current.isPostsLoading).toBe(false);
  });
});
