import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Category} from 'ecars-web-lib';
import type {BlogCardContentProps} from '@ecars/uiKit/BlogCard/constants';
import {generatePath, Link} from 'react-router-dom';
import {PageUrls} from '@ecars/constants/page-urls';

export interface Props extends BlogCardContentProps, ElementProps {}

export const BlogCardContent: FC<Props> = ({block, title, description, category, id}) => {
  const articleUrl = generatePath(PageUrls.BLOG_ARTICLE, {id: id});
  return (
    <div className="blog-card__content">
      <Category
        category={category}
        block={block}
      />
      <Link
        to={articleUrl}
        className="blog-card__title title-blog-card"
      >
        {title}
      </Link>
      {!!description && <p className="blog-card__description">{description}</p>}
    </div>
  );
};
