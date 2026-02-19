import type {FC} from 'react';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog';
import type {ElementProps} from 'ecars-web-lib';
import {Pagination} from 'ecars-web-lib';
import {useAppSelector} from '@ecars/core/hooks/hooks';
import {useBlogContent} from '@ecars/core/hooks/useBlogContent';
import {useBlogNavigation} from '@ecars/core/hooks/useBlogNavigation';

export const BlogCatalogBlock: FC<ElementProps> = ({block}) => {
  const {activeCategory, currentPage, pageSize} = useAppSelector((state) => state.blog);
  const {articlesData, categories, pageCount, pagesArray, isCategoriesLoading, isPostsLoading} = useBlogContent({
    activeCategory,
    currentPage,
    pageSize,
  });
  const {handlePageChange, handleCategoryClick, handleReset, handlePrevPage, handleNextPage} = useBlogNavigation(
    activeCategory,
    currentPage,
    pageCount,
  );
  const hasMultiplePages = pageCount > 1;

  return (
    <div className="blog-catalog__block">
      <BlogCatalog.Categories
        isLoading={isCategoriesLoading}
        block={block}
        handleReset={handleReset}
        categories={categories}
        activeCategory={activeCategory}
        onClick={handleCategoryClick}
      />

      <BlogCatalog.Posts
        block={block}
        articlesData={articlesData}
        isLoading={isPostsLoading}
        pageSize={pageSize}
      />

      {hasMultiplePages && (
        <Pagination
          block={block}
          pages={pagesArray}
          currentPage={currentPage}
          onPageClick={handlePageChange}
          onNextClick={handleNextPage}
          onPrevClick={handlePrevPage}
        />
      )}
    </div>
  );
};
