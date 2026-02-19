import type {FC} from 'react';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import type {BlogArticle} from '@ecars/core/types/types';
import {BLOG_SKELETON_ITEMS_COUNT} from '@ecars/uiKit/Blog/constants';
import {BlogSkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  isLoading: boolean;
  items?: BlogArticle[];
}

export const BlogContent: FC<Props> = ({isLoading, items, block}) => {
  if (isLoading) {
    return (
      <div className="blog__content">
        {[...Array(BLOG_SKELETON_ITEMS_COUNT)].map((_, index) => (
          <BlogSkeleton
            block={block}
            key={index}
            isText
            type="card"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="blog__content">
      {items?.map((item) => (
        <BlogCard
          block={block}
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
};
