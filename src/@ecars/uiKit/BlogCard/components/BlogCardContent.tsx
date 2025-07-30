import type {FC} from 'react';
import {Category} from 'ecars-web-lib';
import type {BlogCardContentProps} from '@ecars/uiKit/BlogCard/constants';

export const BlogCardContent: FC<BlogCardContentProps> = ({title, description, category}) => (
  <div className="blog-card__content">
    <Category category={category} />
    <h3 className="blog-card__title title-blog-card">{title}</h3>
    {!!description && <p className="blog-card__description">{description}</p>}
  </div>
);
