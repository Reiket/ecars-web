import type {FC} from 'react';
import {Blog} from '@ecars/uiKit/Blog/index';
import type {CategoriesListType, ElementProps} from 'ecars-web-lib';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {GET_BLOG_CATALOG_ITEMS_PARAMS} from '@ecars/uiKit/BlogCatalog/constants';

export interface Props extends ElementProps {
  currentCategory?: CategoriesListType;
  currentArticleId?: string;
  title: string;
}

export const BlogComponent: FC<Props> = ({block, currentCategory, currentArticleId, title}) => {
  const {data, isLoading} = useBlog(
    {
      ...GET_BLOG_CATALOG_ITEMS_PARAMS,
      filters: {
        ...(currentCategory && {category: {$eq: currentCategory}}),
        ...(currentArticleId && {documentId: {$ne: currentArticleId}}),
      },
    },
    {skip: !!currentArticleId && !currentCategory},
  );
  return (
    <Blog.Wrapper
      name="blog"
      size="lg"
      block={block}
    >
      <div className="blog__body">
        <Blog.TopPanel title={title} />
        <Blog.Content
          isLoading={isLoading}
          items={data?.data}
        />
      </div>
    </Blog.Wrapper>
  );
};
