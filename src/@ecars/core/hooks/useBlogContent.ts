import {useMemo} from 'react';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {GET_BLOG_CATALOG_ITEMS_PARAMS, GET_CATEGORIES_PARAMS} from '@ecars/uiKit/BlogCatalog/constants';
import type {ArticlesDataType} from '@ecars/core/api/blog-query';

interface UseBlogContentProps {
  activeCategory: string | null;
  currentPage: number;
  pageSize: number;
}

interface UseBlogContentResult {
  isPostsLoading: boolean;
  isCategoriesLoading: boolean;
  categories: string[];
  pageCount: number;
  pagesArray: number[];
  articlesData?: ArticlesDataType;
}

export const useBlogContent = ({activeCategory, currentPage, pageSize}: UseBlogContentProps): UseBlogContentResult => {
  const {data: categoryData, isLoading: isCategoriesLoading} = useBlog(GET_CATEGORIES_PARAMS);

  const {data: articlesData, isLoading: isPostsLoading} = useBlog({
    ...GET_BLOG_CATALOG_ITEMS_PARAMS,
    page: currentPage,
    pageSize: pageSize,
    ...(activeCategory && {
      filters: {category: {$eq: activeCategory}},
    }),
  });

  const categories = useMemo(() => {
    const allCategories = categoryData?.data.flatMap((item) => item.category) ?? [];
    return [...new Set(allCategories)];
  }, [categoryData]);

  const totalItems = articlesData?.meta.pagination.total ?? 0;
  const pageCount = Math.ceil(totalItems / pageSize);

  const pagesArray = useMemo(() => Array.from({length: pageCount}, (_, i) => i + 1), [pageCount]);

  return {
    articlesData,
    isCategoriesLoading,
    isPostsLoading,
    categories,
    pageCount,
    pagesArray,
  };
};
