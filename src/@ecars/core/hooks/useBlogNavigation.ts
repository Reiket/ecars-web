import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '@ecars/core/hooks/hooks';
import {setCategory, setPage} from '@ecars/core/slices/store/blog/BlogSlice';
import {BLOG_URL_PARAMS, DEFAULT_PAGE} from '@ecars/uiKit/BlogCatalog/constants';

interface UseBlogNavigationResult {
  handlePageChange: (page: number) => void;
  handleCategoryClick: (category: string) => void;
  handleReset: () => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export const useBlogNavigation = (
  activeCategory: string | null,
  currentPage: number,
  pageCount: number,
): UseBlogNavigationResult => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [currentPage]);
  useEffect(() => {
    const categoryFromUrl = searchParams.get(BLOG_URL_PARAMS.CATEGORY);
    const pageFromUrl = Number(searchParams.get(BLOG_URL_PARAMS.PAGE)) || DEFAULT_PAGE;

    if (categoryFromUrl !== activeCategory) {
      dispatch(setCategory(categoryFromUrl));
    }
    if (pageFromUrl !== currentPage) {
      dispatch(setPage(pageFromUrl));
    }
  }, [searchParams, dispatch, activeCategory, currentPage]);

  const updateSearch = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value == null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      updateSearch({[BLOG_URL_PARAMS.PAGE]: String(page)});
    }
  };

  const handleCategoryClick = (category: string) => {
    updateSearch({
      [BLOG_URL_PARAMS.CATEGORY]: activeCategory === category ? null : category,
      [BLOG_URL_PARAMS.PAGE]: String(DEFAULT_PAGE),
    });
  };

  const handleReset = () => {
    setSearchParams({});
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };
  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  return {handlePageChange, handleCategoryClick, handleReset, handleNextPage, handlePrevPage};
};
