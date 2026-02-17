import type {FC} from 'react';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog/index';
import type {ElementProps} from 'ecars-web-lib';

export const BlogCatalogComponent: FC<ElementProps> = ({block}) => {
  return (
    <BlogCatalog.Wrapper
      block={block}
      name="blog-catalog"
    >
      <div className="blog-catalog__body">
        <h1 className="blog-catalog__title section-title">Blog & News</h1>
        <p className="blog-catalog__text">
          Company and car market news, as well as car selection guides and car reviews from our authors.
        </p>
        <div className="blog-catalog__inner">
          <BlogCatalog.Block />
          <BlogCatalog.FeaturedPosts />
        </div>
      </div>
    </BlogCatalog.Wrapper>
  );
};
