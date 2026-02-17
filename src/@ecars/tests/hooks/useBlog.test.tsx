import {renderHook} from '@testing-library/react';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {useBlogContent} from '@ecars/core/hooks/useBlogContent';

vi.mock('@ecars/core/hooks/useBlog');

const BASE_META = {pagination: {total: 0, page: 1, pageSize: 6, pageCount: 1}};

// Хелпер для створення мок-об'єктів, щоб не повторювати id, title тощо
const mockResponse = (data: any[], total = 0) => ({
  data,
  meta: {...BASE_META, pagination: {...BASE_META.pagination, total}},
});

describe('useBlogContent hook', () => {
  const defaultProps = {activeCategory: null, currentPage: 1, pageSize: 6};
  const mockedUseBlog = vi.mocked(useBlog);

  beforeEach(() => vi.clearAllMocks());

  test('calculates categories and pagination correctly', () => {
    const categoriesData = [
      {category: 'EV', id: 1, title: '', imageUrl: '', classnames: ''},
      {category: 'Tech', id: 2, title: '', imageUrl: '', classnames: ''},
      {category: 'EV', id: 3, title: '', imageUrl: '', classnames: ''},
    ];

    mockedUseBlog
      .mockReturnValueOnce({data: mockResponse(categoriesData), isLoading: false})
      .mockReturnValueOnce({data: mockResponse([], 15), isLoading: false});

    const {result} = renderHook(() => useBlogContent(defaultProps));

    expect(result.current.categories).toEqual(['EV', 'Tech']);
    expect(result.current.pageCount).toBe(3);
    expect(result.current.pagesArray).toEqual([1, 2, 3]);
  });

  test.each([
    {cat: 'EV', expected: {filters: {category: {$eq: 'EV'}}}},
    {cat: null, expected: {}},
  ])('calls useBlog with filter: $cat', ({cat, expected}) => {
    mockedUseBlog.mockReturnValue({data: undefined, isLoading: true} as any);

    renderHook(() => useBlogContent({...defaultProps, activeCategory: cat}));

    expect(useBlog).toHaveBeenLastCalledWith(expect.objectContaining(expected));
  });

  test('returns loading states', () => {
    mockedUseBlog
      .mockReturnValueOnce({data: undefined, isLoading: true})
      .mockReturnValueOnce({data: undefined, isLoading: false});

    const {result} = renderHook(() => useBlogContent(defaultProps));

    expect(result.current.isCategoriesLoading).toBe(true);
    expect(result.current.isPostsLoading).toBe(false);
  });
});
