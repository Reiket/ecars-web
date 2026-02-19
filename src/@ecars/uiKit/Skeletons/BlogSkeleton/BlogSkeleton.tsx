import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import type {BlogSkeletonType} from '@ecars/uiKit/Skeletons/BlogSkeleton/constants';

interface Props extends ElementProps {
  type: BlogSkeletonType;
  isText?: boolean;
  hasSlider?: boolean;
}

export const BlogSkeleton: FC<Props> = ({type, block, isText = false, hasSlider = false}) => (
  <div
    className={cn(block, 'blog-skeleton', `blog-skeleton--${type}`, {
      'has-slider': hasSlider,
    })}
  >
    <div className="blog-skeleton__image"></div>
    <div className="blog-skeleton__content">
      <div className="blog-skeleton__category"></div>
      <div className="blog-skeleton__title"></div>
      {isText && <div className="blog-skeleton__text"></div>}
    </div>
  </div>
);
