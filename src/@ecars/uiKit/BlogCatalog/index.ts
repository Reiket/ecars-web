import {BlogCatalogComponent} from '@ecars/uiKit/BlogCatalog/BlogCatalogComponent';
import {BlogCatalogFeaturesPostsWrapperHOC, BlogCatalogWrapperHOC} from '@ecars/uiKit/BlogCatalog/constants';
import {BlogCatalogList} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogList';
import {BlogCatalogBlock} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogBlock';
import {BlogCatalogPosts} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogPosts';
import {BlogCatalogCategories} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogCategories';
import {BlogCatalogFeaturedPosts} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogFeaturedPosts';
import {BlogCatalogFeaturedContent} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogFeaturedContent';
import {BlogCatalogFeaturedPostsSlider} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogFeaturedPostsSlider';

export const BlogCatalog = Object.assign(BlogCatalogComponent, {
  Wrapper: BlogCatalogWrapperHOC,
  List: BlogCatalogList,
  Block: BlogCatalogBlock,
  Posts: BlogCatalogPosts,
  Categories: BlogCatalogCategories,
  FeaturedPosts: Object.assign(BlogCatalogFeaturedPosts, {
    Wrapper: BlogCatalogFeaturesPostsWrapperHOC,
    Content: BlogCatalogFeaturedContent,
    Slider: BlogCatalogFeaturedPostsSlider,
  }),
});
