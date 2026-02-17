import type {FC} from 'react';
import {Blog} from '@ecars/uiKit/Blog/index';
import type {ElementProps} from 'ecars-web-lib';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {BLOG_QUERY_PARAMS} from '@ecars/uiKit/Blog/constants';

export const BlogComponent: FC<ElementProps> = ({block}) => {
  const {data, isLoading} = useBlog(BLOG_QUERY_PARAMS);
  return (
    <Blog.Wrapper
      name="blog"
      size="lg"
      block={block}
    >
      <div className="blog__body">
        <Blog.TopPanel />
        <Blog.Content
          isLoading={isLoading}
          items={data?.data}
        />
      </div>
    </Blog.Wrapper>
  );
};
