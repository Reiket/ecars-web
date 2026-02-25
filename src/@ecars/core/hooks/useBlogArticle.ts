import {useParams} from 'react-router-dom';
import {useGetBlogArticleByIdQuery} from '@ecars/core/slices/api/blogApiSlice';
import type {BlogArticleType} from '@ecars/core/types/types';
import type {CategoriesListType} from 'ecars-web-lib';
import {BLOG_ARTICLE_PARAMS} from '@ecars/uiKit/BlogArticle/constants';

interface UseBlogArticleResult {
  id?: string;
  articleData?: BlogArticleType;
  currentCategory?: CategoriesListType;
  isLoading: boolean;
}

export const useBlogArticle = (): UseBlogArticleResult => {
  const {id} = useParams();

  const queryArgs = {
    id: id ?? '',
    ...BLOG_ARTICLE_PARAMS,
  };

  const queryOptions = {
    skip: !id,
  };
  const {data: currentArticle, isLoading} = useGetBlogArticleByIdQuery(queryArgs, queryOptions);

  const articleData = currentArticle?.data;
  const currentCategory = articleData?.category;

  return {
    id,
    articleData,
    currentCategory,
    isLoading,
  };
};
