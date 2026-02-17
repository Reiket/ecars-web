import {withBlockClass} from 'ecars-web-lib';
import {SectionWrapper} from '@ecars/uiKit/Section/components/SectionWrapper';
import {BlogCatalogFeaturesPostsWrapper} from '@ecars/uiKit/BlogCatalog/components/BlogCatalogFeaturesPostsWrapper';
import type {ArticlesDataType} from '@ecars/core/api/blog-query';

export interface BlogCatalogCategoriesProps {
  categories: string[];
  activeCategory: string | null;
  onClick: (category: string) => void;
  isLoading: boolean;
}

export interface FeaturedPostsContentProps {
  isLoading: boolean;
  articlesData?: ArticlesDataType;
}

export const DEFAULT_PAGE = 1;
export const FEATURED_POSTS_MOBILE_BREAKPOINT = 1162;
export const FEATURED_POSTS_SKELETONS_COUNT = 7;
export const BLOG_CATALOG_SKELETON_CATEGORIES_COUNT = 3;

export const FEATURED_CONTENT_TEST_ID = 'featuredContentTestId';
export const FEATURED_SLIDER_TEST_ID = 'featuredSliderTestId';

export const BLOG_URL_PARAMS = Object.freeze({
  CATEGORY: 'category',
  PAGE: 'page',
});

export const GET_CATEGORIES_PARAMS = {
  fields: ['category'],
  limit: 1000,
};

export const GET_BLOG_FEATURED_ITEMS_PARAMS = {
  image: 'imageUrl',
  recommendedStatus: true,
};

export const GET_BLOG_CATALOG_ITEMS_PARAMS = {
  image: 'imageUrl',
  recommendedStatus: false,
};

export const FEATURED_POSTS_SLIDER_BREAKPOINTS = {
  320: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
};

export const BlogCatalogWrapperHOC = withBlockClass(SectionWrapper, 'blog-catalog');
export const BlogCatalogFeaturesPostsWrapperHOC = withBlockClass(BlogCatalogFeaturesPostsWrapper, 'featured-posts');
