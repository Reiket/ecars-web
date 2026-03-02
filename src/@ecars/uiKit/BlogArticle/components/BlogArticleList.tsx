import type {FC} from 'react';
import type {CategoriesListType, ElementProps} from 'ecars-web-lib';
import {Category} from 'ecars-web-lib';
import {blogArticleInfoList} from '@ecars/uiKit/BlogArticle/constants';

export interface Props extends ElementProps {
  added: string;
  views: number;
  category: CategoriesListType;
}

export const BlogArticleList: FC<Props> = ({added, views, category, block}) => (
  <ul className="blog-article__list">
    <li className="blog-article__item">
      <Category
        category={category}
        block={block}
      />
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
