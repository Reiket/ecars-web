import {BlogWrapperHOC} from '@ecars/uiKit/Blog/constants';
import {BlogComponent} from '@ecars/uiKit/Blog/BlogComponent';
import {BlogTopPanel} from '@ecars/uiKit/Blog/components/BlogTopPanel';
import {BlogContent} from '@ecars/uiKit/Blog/components/BlogContent';

export const Blog = Object.assign(BlogComponent, {
  Wrapper: BlogWrapperHOC,
  TopPanel: BlogTopPanel,
  Content: BlogContent,
});
