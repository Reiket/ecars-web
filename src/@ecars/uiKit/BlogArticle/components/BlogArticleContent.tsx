import type {FC} from 'react';
import type {BlogArticleContentType} from '@ecars/core/types/types';

export interface Props {
  content: BlogArticleContentType[];
}

export const BlogArticleContent: FC<Props> = ({content}) => (
  <ul className="blog-article__content">
    {content.map((item) => (
      <li
        className="blog-article__block"
        key={item.id}
      >
        <h3 className="blog-article__section block-title">{item.title}</h3>
        <p className="blog-article__text">{item.text}</p>
      </li>
    ))}
  </ul>
);
