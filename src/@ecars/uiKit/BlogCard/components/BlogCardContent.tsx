import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Category} from 'ecars-web-lib';
import type {BlogCardContentProps} from '@ecars/uiKit/BlogCard/constants';
import {Link} from 'react-router-dom';

interface Props extends BlogCardContentProps, ElementProps {}

export const BlogCardContent: FC<Props> = ({block, title, description, category}) => (
  <div className="blog-card__content">
    <Category
      category={category}
      block={block}
    />
    <Link
      to="/card"
      className="blog-card__title title-blog-card"
    >
      {title}
    </Link>
    {!!description && <p className="blog-card__description">{description}</p>}
  </div>
);
