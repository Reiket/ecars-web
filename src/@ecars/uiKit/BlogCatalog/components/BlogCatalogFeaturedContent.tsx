import type {FC} from 'react';
import {BlogSkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import type {FeaturedPostsContentProps} from '@ecars/uiKit/BlogCatalog/constants';
import {FEATURED_CONTENT_TEST_ID, FEATURED_POSTS_SKELETONS_COUNT} from '@ecars/uiKit/BlogCatalog/constants';

export const BlogCatalogFeaturedContent: FC<FeaturedPostsContentProps> = ({isLoading, articlesData}) => {
  if (isLoading) {
    return Array.from({length: FEATURED_POSTS_SKELETONS_COUNT}).map((_, index) => (
      <BlogSkeleton
        key={index}
        type="featured"
      />
    ));
  }
  return (
    <div
      data-testid={FEATURED_CONTENT_TEST_ID}
      className="featured-posts__content"
    >
      {articlesData?.data.map((item) => (
        <BlogCard
          key={item.id}
          direction="row"
          title={item.title}
          category={item.category}
          imageUrl={item.imageUrl.formats.medium?.url}
        />
      ))}
    </div>
  );
};
