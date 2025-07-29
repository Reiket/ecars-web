import type {FC} from 'react';
import type {BlogCardImageProps} from '@ecars/uiKit/BlogCard/constants';

export const BlogCardImage: FC<BlogCardImageProps> = ({imageUrl, alt = 'Blog_Card_Image'}) => (
  <img
    className="blog-card__image"
    src={imageUrl}
    alt={alt}
  />
);
