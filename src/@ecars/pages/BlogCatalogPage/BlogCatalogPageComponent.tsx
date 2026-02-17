import type {FC} from 'react';
import {BlogCatalogPage} from '@ecars/pages/BlogCatalogPage/index';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog';

export const BlogCatalogPageComponent: FC = () => {
  return (
    <BlogCatalogPage.Wrapper>
      <BlogCatalog />
    </BlogCatalogPage.Wrapper>
  );
};
