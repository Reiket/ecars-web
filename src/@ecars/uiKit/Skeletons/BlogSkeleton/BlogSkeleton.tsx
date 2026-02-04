import type {FC} from 'react';
import {cn} from 'ecars-web-lib';
import type {BlogSkeletonType} from '@ecars/uiKit/Skeletons/BlogSkeleton/constants';

interface Props {
  isText?: boolean;
  type: BlogSkeletonType;
}

export const BlogSkeleton: FC<Props> = ({isText, type}) => (
  <div className={cn('blog-skeleton', `blog-skeleton--${type}`)}>
    <div className="blog-skeleton__image"></div>
    <div className="blog-skeleton__content">
      <div className="blog-skeleton__category"></div>
      <div className="blog-skeleton__title"></div>
      {isText && <div className="blog-skeleton__text"></div>}
    </div>
  </div>
);
