import type {CategoriesListType} from 'ecars-web-lib';
import {withBlockClass} from 'ecars-web-lib';
import {BlogCardWrapper} from '@ecars/uiKit/BlogCard/components/BlogCardWrapper';

export const BlogCardWrapperHOC = withBlockClass(BlogCardWrapper, 'blog-card');

export const BLOG_CARD_DIRECTION = Object.freeze({
  ROW: 'row',
  COLUMN: 'column',
});

export type BlogCardDirectionType = (typeof BLOG_CARD_DIRECTION)[keyof typeof BLOG_CARD_DIRECTION];

export interface BlogCardContentProps {
  title: string;
  id: string;
  category: CategoriesListType;
  description?: string;
}

export interface BlogCardImageProps {
  imageUrl?: string;
  alt?: string;
}

export const BLOG_CARD_TEST_ID = 'blogCardTestId';
