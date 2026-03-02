import type {FC} from 'react';

export interface Props {
  imageUrl?: string;
}

export const BlogArticleImage: FC<Props> = ({imageUrl}) => (
  <img
    className="blog-article__image"
    src={imageUrl}
    alt="Blog_Article_Image"
  />
);
