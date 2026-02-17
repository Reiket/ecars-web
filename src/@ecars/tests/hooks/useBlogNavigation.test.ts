import {renderHook, act} from '@testing-library/react';
import {useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '@ecars/core/hooks/hooks';
import {setCategory, setPage} from '@ecars/core/slices/store/blog/BlogSlice';
import {BLOG_URL_PARAMS} from '@ecars/uiKit/BlogCatalog/constants';
import {useBlogNavigation} from '@ecars/core/hooks/useBlogNavigation';
import {dispatch, mockSearchParamsGet} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/hooks/hooks');

vi.mock('react-router-dom', () => ({
  useSearchParams: vi.fn(),
}));

describe('useBlogNavigation', () => {
  const scrollToSpy = vi.spyOn(window, 'scrollTo');
  beforeEach(() => {
    vi.mocked(useAppDispatch).mockReturnValue(dispatch);
    vi.mocked(useSearchParams).mockReturnValue([new URLSearchParams(), mockSearchParamsGet]);
    vi.clearAllMocks();
  });

  test('syncs URL to store and scrolls on update', () => {
    const params = new URLSearchParams(`${BLOG_URL_PARAMS.CATEGORY}=news&${BLOG_URL_PARAMS.PAGE}=2`);
    vi.mocked(useSearchParams).mockReturnValue([params, mockSearchParamsGet]);

    const {rerender} = renderHook(({p}) => useBlogNavigation(null, p, 10), {
      initialProps: {p: 1},
    });

    expect(dispatch).toHaveBeenCalledWith(setCategory('news'));
    expect(dispatch).toHaveBeenCalledWith(setPage(2));

    rerender({p: 3});
    expect(scrollToSpy).toHaveBeenCalledWith({top: 0, behavior: 'auto'});
  });

  test('navigation and category actions update URL', () => {
    const {result} = renderHook(() => useBlogNavigation('news', 2, 5));

    act(() => {
      result.current.handleNextPage();
      result.current.handleCategoryClick('news');
      result.current.handleCategoryClick('guides');
      result.current.handleReset();
    });

    const getParam = (callIdx: number, key: string) =>
      (mockSearchParamsGet.mock.calls[callIdx][0] as URLSearchParams).get(key);

    expect(getParam(0, BLOG_URL_PARAMS.PAGE)).toBe('3');
    expect(getParam(1, BLOG_URL_PARAMS.CATEGORY)).toBeNull();
    expect(getParam(2, BLOG_URL_PARAMS.CATEGORY)).toBe('guides');
    expect(mockSearchParamsGet).toHaveBeenLastCalledWith({});
  });

  test('prevPage and bounds check', () => {
    const {result} = renderHook(() => useBlogNavigation(null, 1, 5));

    act(() => {
      result.current.handlePrevPage();
      result.current.handlePageChange(3);
    });

    expect(mockSearchParamsGet).toHaveBeenCalledTimes(1);
    expect((mockSearchParamsGet.mock.calls[0][0] as URLSearchParams).get(BLOG_URL_PARAMS.PAGE)).toBe('3');
  });
});
