import {BlogArticleComponent} from '@ecars/uiKit/BlogArticle/BlogArticleComponent';
import {BlogArticleWrapperHOC} from '@ecars/uiKit/BlogArticle/constants';
import {BlogArticleList} from '@ecars/uiKit/BlogArticle/components/BlogArticleList';
import {BlogArticleContent} from '@ecars/uiKit/BlogArticle/components/BlogArticleContent';
import {BlogArticleImage} from '@ecars/uiKit/BlogArticle/components/BlogArticleImage';
import {BlogArticleShare} from '@ecars/uiKit/BlogArticle/components/BlogArticleShare';

export const BlogArticle = Object.assign(BlogArticleComponent, {
  Wrapper: BlogArticleWrapperHOC,
  List: BlogArticleList,
  Image: BlogArticleImage,
  Content: BlogArticleContent,
  Share: BlogArticleShare,
});
