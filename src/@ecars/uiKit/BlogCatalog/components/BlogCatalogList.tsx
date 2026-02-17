import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {capitalizeFirstLetter, ButtonCategory} from 'ecars-web-lib';
import type {BlogCatalogCategoriesProps} from '@ecars/uiKit/BlogCatalog/constants';
import {BLOG_CATALOG_SKELETON_CATEGORIES_COUNT} from '@ecars/uiKit/BlogCatalog/constants';
import {BlogCategorySkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogCategorySkeleton';

interface Props extends BlogCatalogCategoriesProps, ElementProps {}

export const BlogCatalogList: FC<Props> = ({block, activeCategory, categories, onClick, isLoading}) => {
  if (isLoading) {
    return Array.from({length: BLOG_CATALOG_SKELETON_CATEGORIES_COUNT}).map((_, index) => (
      <BlogCategorySkeleton key={index} />
    ));
  }
  return (
    <ul className="blog-catalog__list">
      {categories.map((category) => (
        <li
          key={category}
          className="blog-catalog__category"
        >
          <ButtonCategory
            block={block}
            isActive={activeCategory === category}
            onClick={() => {
              onClick(category);
            }}
          >
            {capitalizeFirstLetter(category)}
          </ButtonCategory>
        </li>
      ))}
    </ul>
  );
};
