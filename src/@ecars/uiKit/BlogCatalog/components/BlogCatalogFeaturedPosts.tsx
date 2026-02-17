import type {FC} from 'react';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {FEATURED_POSTS_MOBILE_BREAKPOINT, GET_BLOG_FEATURED_ITEMS_PARAMS} from '@ecars/uiKit/BlogCatalog/constants';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog';
import type {ElementProps} from 'ecars-web-lib';
import {SliderNavigate} from 'ecars-web-lib';
import {useWindowWidth} from '@ecars/services/hooks/useWindowWidth';

export const BlogCatalogFeaturedPosts: FC<ElementProps> = ({block}) => {
  const {data, isLoading} = useBlog(GET_BLOG_FEATURED_ITEMS_PARAMS);
  const isMoving = useWindowWidth(FEATURED_POSTS_MOBILE_BREAKPOINT);
  const featuredPostsRender = () => {
    const Component = isMoving ? BlogCatalog.FeaturedPosts.Slider : BlogCatalog.FeaturedPosts.Content;

    return (
      <Component
        isLoading={isLoading}
        articlesData={data}
      />
    );
  };
  return (
    <BlogCatalog.FeaturedPosts.Wrapper block={block}>
      <div className="featured-posts__top">
        <h4 className="featured-posts__title block-title">Featured posts</h4>
        {isMoving && <SliderNavigate />}
      </div>
      {featuredPostsRender()}
    </BlogCatalog.FeaturedPosts.Wrapper>
  );
};
