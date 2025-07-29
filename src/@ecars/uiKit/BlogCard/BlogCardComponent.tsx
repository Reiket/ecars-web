import type {FC} from 'react';
import {BlogCard} from '@ecars/uiKit/BlogCard/index';
import type {BlogCardContentProps, BlogCardDirectionType, BlogCardImageProps} from '@ecars/uiKit/BlogCard/constants';
import {BLOG_CARD_TEST_ID} from '@ecars/uiKit/BlogCard/constants';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

interface Props extends BlogCardContentProps, BlogCardImageProps, ElementProps {
  direction: BlogCardDirectionType;
}

export const BlogCardComponent: FC<Props> = ({block, description, title, category, imageUrl, alt, direction}) => {
  const classNames = cn(block, 'blog-card', `blog-card--${direction}`);
  return (
    <article
      data-testid={BLOG_CARD_TEST_ID}
      className={classNames}
    >
      <BlogCard.Image
        imageUrl={imageUrl}
        alt={alt}
      />
      <BlogCard.Content
        category={category}
        title={title}
        description={description}
      />
    </article>
  );
};
