import {BlogCatalogPageWrapperHOC} from '@ecars/pages/BlogCatalogPage/constants';
import {BlogCatalogPageComponent} from '@ecars/pages/BlogCatalogPage/BlogCatalogPageComponent';

export const BlogCatalogPage = Object.assign(BlogCatalogPageComponent, {
  Wrapper: BlogCatalogPageWrapperHOC,
});
