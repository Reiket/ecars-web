import type {FC} from 'react';
import {Category} from 'ecars-web-lib';
import type {BlogCardContentProps} from '@ecars/uiKit/BlogCard/constants';
import {Link} from 'react-router-dom';

export const BlogCardContent: FC<BlogCardContentProps> = ({title, description, category}) => (
  <div className="blog-card__content">
    <Category category={category} />
    <Link
      to="/card"
      className="blog-card__title title-blog-card"
    >
      {title}
    </Link>
    {!!description && <p className="blog-card__description">{description}</p>}
  </div>
);
