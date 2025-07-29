import {render, screen} from '@testing-library/react';
import {BLOG_CARD_DIRECTION, BLOG_CARD_TEST_ID} from '@ecars/uiKit/BlogCard/constants';
import {BlogCard} from '@ecars/uiKit/BlogCard';
import {capitalizeFirstLetter, CATEGORIES_LIST} from 'ecars-web-lib';

const defaultProps = {
  title: 'title',
  imageUrl: '',
  category: CATEGORIES_LIST.NEWS,
};

describe('Blog Card Component', () => {
  const cardDirection = Object.values(BLOG_CARD_DIRECTION);
  cardDirection.forEach((direction) => {
    test(`renders correctly with ${direction} direction`, () => {
      const {container} = render(
        <BlogCard
          direction={direction}
          {...defaultProps}
        />,
      );
      const element = screen.getByTestId(BLOG_CARD_TEST_ID);
      expect(element).toBeInTheDocument();
      expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
      expect(screen.getByText(capitalizeFirstLetter(defaultProps.category))).toBeInTheDocument();
      expect(element).toHaveClass(`blog-card--${direction}`);
      expect(container).toMatchSnapshot();
    });
    test(`renders with description`, () => {
      const descriptionTest = 'Description';
      const {container} = render(
        <BlogCard
          direction={direction}
          description={descriptionTest}
          {...defaultProps}
        />,
      );
      expect(screen.getByText(descriptionTest)).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });
});
