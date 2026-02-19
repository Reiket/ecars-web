import {BlogCardContent} from '@ecars/uiKit/BlogCard/components/BlogCardContent';
import {BlogCardComponent} from '@ecars/uiKit/BlogCard/BlogCardComponent';
import {BlogCardImage} from '@ecars/uiKit/BlogCard/components/BlogCardImage';
import {BlogCardWrapperHOC} from '@ecars/uiKit/BlogCard/constants';

export const BlogCard = Object.assign(BlogCardComponent, {
  Content: BlogCardContent,
  Image: BlogCardImage,
  Wrapper: BlogCardWrapperHOC,
});
