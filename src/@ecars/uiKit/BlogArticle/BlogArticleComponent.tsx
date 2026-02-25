import type {FC} from 'react';
import {BlogArticle} from '@ecars/uiKit/BlogArticle';
import type {ElementProps} from 'ecars-web-lib';
import type {BlogArticleType} from '@ecars/core/types/types';

export interface Props extends ElementProps {
  articleData?: BlogArticleType;
}
export const BlogArticleComponent: FC<Props> = ({block, articleData}) => {
  if (!articleData) {
    return null;
  }
  const {title, category, imageUrl, added, views, content} = articleData;
  return (
    <BlogArticle.Wrapper
      name="blog-article"
      block={block}
      size="sm"
    >
      <h1 className="blog-article__title section-title">{title}</h1>
      <BlogArticle.List
        added={added}
        views={views}
        category={category}
      />
      <BlogArticle.Image imageUrl={imageUrl.formats.medium?.url} />
      <BlogArticle.Content content={content} />
      <BlogArticle.Share />
    </BlogArticle.Wrapper>
  );
};
