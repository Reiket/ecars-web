import type {FC} from 'react';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog';
import type {ElementProps} from 'ecars-web-lib';
import {Button} from 'ecars-web-lib';
import type {BlogCatalogCategoriesProps} from '@ecars/uiKit/BlogCatalog/constants';

interface Props extends BlogCatalogCategoriesProps, ElementProps {
  handleReset: () => void;
}

export const BlogCatalogCategories: FC<Props> = ({
  block,
  activeCategory,
  categories,
  onClick,
  handleReset,
  isLoading,
}) => (
  <div className="blog-catalog__categories">
    <p className="blog-catalog__name">Categories:</p>
    <BlogCatalog.List
      isLoading={isLoading}
      block={block}
      categories={categories}
      activeCategory={activeCategory}
      onClick={onClick}
    />
    <Button
      block={block}
      size="small"
      color="gray"
      onClick={handleReset}
    >
      Reset
    </Button>
  </div>
);
