import {withBlockClass} from 'ecars-web-lib';
import {SectionWrapper} from '@ecars/uiKit/Section/components/SectionWrapper';

export const BlogWrapperHOC = withBlockClass(SectionWrapper, 'blog');

const BLOG_PAGE_SIZE = 3;
export const BLOG_SKELETON_ITEMS_COUNT = 3;

export const BLOG_QUERY_PARAMS = {
  pageSize: BLOG_PAGE_SIZE,
  sort: 'createdAt:desc',
  image: 'imageUrl',
};

export const BLOG_CARD_TEST_ID = 'blogCardTestId';
export const BLOG_CARD_SKELETON_TEST_ID = 'blogCardSkeletonTestId';
