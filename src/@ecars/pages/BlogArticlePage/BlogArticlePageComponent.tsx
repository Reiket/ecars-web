import type {FC} from 'react';
import {BlogArticlePage} from '@ecars/pages/BlogArticlePage/index';
import {BlogArticle} from '@ecars/uiKit/BlogArticle';
import {Loader} from 'ecars-web-lib';
import {Blog} from '@ecars/uiKit/Blog';
import {useBlogArticle} from '@ecars/core/hooks/useBlogArticle';

export const BlogArticlePageComponent: FC = () => {
  const {id, isLoading, currentCategory, articleData} = useBlogArticle();
  return (
    <BlogArticlePage.Wrapper>
      {isLoading ? <Loader /> : <BlogArticle articleData={articleData} />}
      <Blog
        title="Related articles"
        currentCategory={currentCategory}
        currentArticleId={id}
      />
    </BlogArticlePage.Wrapper>
  );
};
