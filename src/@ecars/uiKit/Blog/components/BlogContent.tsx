import type {FC} from 'react';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import type {BlogArticle} from '@ecars/core/types/types';
import {BLOG_SKELETON_ITEMS_COUNT} from '@ecars/uiKit/Blog/constants';
import {BlogSkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton';

export interface Props {
  isLoading: boolean;
  items?: BlogArticle[];
}

export const BlogContent: FC<Props> = ({isLoading, items}) => (
  <div className="blog__content">
    {isLoading
      ? [...Array(BLOG_SKELETON_ITEMS_COUNT)].map((_, index) => (
          <BlogSkeleton
            key={index}
            isText
            type="card"
          />
        ))
      : items?.map((item) => (
          <BlogCard
            key={item.id}
            direction="column"
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl.formats.medium?.url}
            description={item.description}
          />
        ))}
  </div>
);
