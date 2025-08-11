import {render, screen} from '@testing-library/react';
import {BLOG_CARD_DIRECTION, BLOG_CARD_TEST_ID} from '@ecars/uiKit/BlogCard/constants';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import {capitalizeFirstLetter, CATEGORIES_LIST} from 'ecars-web-lib';
import {expect, describe, test} from 'vitest';

const defaultProps = {
  title: 'title',
  imageUrl: '',
  category: CATEGORIES_LIST.NEWS,
};

describe('Blog Card Component', () => {
  const cardDirection = Object.values(BLOG_CARD_DIRECTION);
  const descriptionOptions = ['Description', undefined];
  cardDirection.forEach((direction) => {
    descriptionOptions.forEach((option) => {
      const hasDescription = option ? 'has a description' : '';
      test(`renders correctly with ${direction} direction, category, title ${hasDescription}`, () => {
        const {container} = render(
          <BlogCard
            description={option}
            direction={direction}
            {...defaultProps}
          />,
        );
        const element = screen.getByTestId(BLOG_CARD_TEST_ID);
        expect(element).toBeInTheDocument();
        if (option) {
          expect(screen.getByText(option)).toBeInTheDocument();
        }
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        expect(screen.getByText(capitalizeFirstLetter(defaultProps.category))).toBeInTheDocument();
        expect(element).toHaveClass(`blog-card--${direction}`);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
