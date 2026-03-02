import type {FC} from 'react';
import {Slider} from 'ecars-web-lib';
import {Autoplay, Navigation} from 'swiper/modules';
import type {FeaturedPostsContentProps} from '@ecars/uiKit/BlogCatalog/constants';
import {
  FEATURED_SLIDER_TEST_ID,
  FEATURED_POSTS_SLIDER_BREAKPOINTS,
  FEATURED_POSTS_SKELETONS_COUNT,
} from '@ecars/uiKit/BlogCatalog/constants';
import {SLIDER_NAVIGATION_PARAMS} from '@ecars/constants/slider-params';
import {BlogSkeleton} from '@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton';
import {BlogCard} from '@ecars/uiKit/BlogCard';

export const BlogCatalogFeaturedPostsSlider: FC<FeaturedPostsContentProps> = ({isLoading, articlesData, block}) => {
  const renderSkeletons = () =>
    [...Array(FEATURED_POSTS_SKELETONS_COUNT)].map((_, idx) => (
      <Slider.Slide key={idx}>
        <BlogSkeleton
          block={block}
          hasSlider
          type="card"
        />
      </Slider.Slide>
    ));
  const renderCards = () =>
    articlesData?.data.map((item) => (
      <Slider.Slide key={item.id}>
        <BlogCard
          id={item.documentId}
          block={block}
          direction="column"
          title={item.title}
          category={item.category}
          imageUrl={item.imageUrl.formats.medium?.url}
          description={item.description}
        />
      </Slider.Slide>
    ));

  return (
    <div
      data-testid={FEATURED_SLIDER_TEST_ID}
      className="featured-posts__slider"
    >
      <Slider
        spaceBetween={16}
        slidesPerView={2}
        modules={[Autoplay, Navigation]}
        breakpoints={FEATURED_POSTS_SLIDER_BREAKPOINTS}
        loop
        navigation={SLIDER_NAVIGATION_PARAMS}
      >
        {isLoading ? renderSkeletons() : renderCards()}
      </Slider>
    </div>
  );
};
