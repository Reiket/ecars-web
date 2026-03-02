import {render} from '@testing-library/react';
import {mockBlogCards} from '@ecars/core/slices/store/blog/mocks';
import {BlogArticle} from '@ecars/uiKit/BlogArticle/index';

describe('BlogArticle Component', () => {
  test('should render component correctly', () => {
    const {container} = render(<BlogArticle articleData={mockBlogCards[0]} />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
