import {render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {Blog} from '@ecars/uiKit/Blog';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {MemoryRouter} from 'react-router-dom';
import {BLOG_CARD_SKELETON_TEST_ID, BLOG_CARD_TEST_ID, BLOG_SKELETON_ITEMS_COUNT} from '@ecars/uiKit/Blog/constants';
import {mockBlogCards} from '@ecars/core/slices/store/blog/mocks';

vi.mock('@ecars/core/hooks/useBlog', () => ({
  useBlog: vi.fn(),
}));

vi.mock('@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton', () => ({
  BlogSkeleton: () => <div data-testid={BLOG_CARD_SKELETON_TEST_ID}>Skeleton</div>,
}));

vi.mock('@ecars/uiKit/BlogCard', () => ({
  BlogCard: ({title}: {title: string}) => <div data-testid={BLOG_CARD_TEST_ID}>{title}</div>,
}));

describe('Blog Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render skeletons when isLoading is true', () => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: true,
      data: undefined,
    });

    const {container} = render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>,
    );

    const skeletons = screen.getAllByTestId(BLOG_CARD_SKELETON_TEST_ID);
    expect(skeletons).toHaveLength(BLOG_SKELETON_ITEMS_COUNT);
    expect(screen.queryByTestId(BLOG_CARD_TEST_ID)).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render blog cards when data is loaded', () => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: false,
      data: {data: mockBlogCards},
    });

    const {container} = render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId(BLOG_CARD_SKELETON_TEST_ID)).not.toBeInTheDocument();
    const cards = screen.getAllByTestId(BLOG_CARD_TEST_ID);
    expect(cards).toHaveLength(mockBlogCards.length);
    expect(container).toMatchSnapshot();
  });
});
