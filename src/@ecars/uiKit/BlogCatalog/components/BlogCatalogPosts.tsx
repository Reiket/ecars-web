import type {FC} from 'react';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import type {ArticlesDataType} from '@ecars/core/api/blog-query';
import {BlogSkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton';
import type {ElementProps} from 'ecars-web-lib';

interface Props extends ElementProps {
  articlesData?: ArticlesDataType;
  isLoading: boolean;
  pageSize: number;
}

export const BlogCatalogPosts: FC<Props> = ({block, articlesData, isLoading, pageSize}) => {
  if (isLoading) {
    return (
      <div className="blog-catalog__posts">
        {Array.from({length: pageSize}).map((_, index) => (
          <BlogSkeleton
            key={index}
            isText
            type="card"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="blog-catalog__posts">
      {articlesData?.data.map((item) => (
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
