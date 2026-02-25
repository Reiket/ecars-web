import {BlogArticlePageComponent} from '@ecars/pages/BlogArticlePage/BlogArticlePageComponent';
import {BlogArticlePageWrapperHOC} from '@ecars/pages/BlogArticlePage/constants';

export const BlogArticlePage = Object.assign(BlogArticlePageComponent, {
  Wrapper: BlogArticlePageWrapperHOC,
});
