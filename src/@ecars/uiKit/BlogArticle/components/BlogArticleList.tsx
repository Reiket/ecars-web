import type {FC} from 'react';
import type {CategoriesListType} from 'ecars-web-lib';
import {Category} from 'ecars-web-lib';
import {blogArticleInfoList} from '@ecars/uiKit/BlogArticle/constants';

interface Props {
  added: string;
  views: number;
  category: CategoriesListType;
}

export const BlogArticleList: FC<Props> = ({added, views, category}) => (
  <ul className="blog-article__list">
    <li className="blog-article__item">
      <Category category={category} />
    </li>
    {blogArticleInfoList(added, views).map((item, id) => (
      <li
        key={id}
        className="blog-article__item"
      >
        <item.icon />
        {item.text}
      </li>
    ))}
  </ul>
);
