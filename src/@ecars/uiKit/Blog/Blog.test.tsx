import {render, screen} from '@testing-library/react';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {MemoryRouter} from 'react-router-dom';
import {BLOG_CARD_SKELETON_TEST_ID, BLOG_CARD_TEST_ID, BLOG_SKELETON_ITEMS_COUNT} from '@ecars/uiKit/Blog/constants';
import {mockBlogCards} from '@ecars/core/slices/store/blog/mocks';
import {metaResponseMock} from '@ecars/services/__mocks__/mocks';
import {GET_BLOG_CATALOG_ITEMS_PARAMS} from '@ecars/uiKit/BlogCatalog/constants';
import {Blog} from '@ecars/uiKit/Blog/index';

vi.mock('@ecars/core/hooks/useBlog', () => ({
  useBlog: vi.fn(),
}));

vi.mock('@ecars/uiKit/Skeletons/BlogSkeleton/BlogSkeleton', () => ({
  BlogSkeleton: () => <div data-testid={BLOG_CARD_SKELETON_TEST_ID}>Skeleton</div>,
}));

vi.mock('@ecars/uiKit/BlogCard', () => ({
  BlogCard: ({title}: {title: string}) => <div data-testid={BLOG_CARD_TEST_ID}>{title}</div>,
}));

const TEST_TITLE = 'Read our blog';

describe('Blog Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should call useBlog with correct params and skip condition', () => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: false,
      data: undefined,
    });

    render(
      <MemoryRouter>
        <Blog
          title={TEST_TITLE}
          currentCategory="news"
          currentArticleId="123"
        />
      </MemoryRouter>,
    );

    expect(useBlog).toHaveBeenCalledWith(
      {
        ...GET_BLOG_CATALOG_ITEMS_PARAMS,
        filters: {category: {$eq: 'news'}, documentId: {$ne: '123'}},
      },
      {skip: false},
    );
  });

  test('should render skeletons when isLoading is true', () => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: true,
      data: undefined,
    });

    const {container} = render(
      <MemoryRouter>
        <Blog title={TEST_TITLE} />
      </MemoryRouter>,
    );

    expect(screen.getAllByTestId(BLOG_CARD_SKELETON_TEST_ID)).toHaveLength(BLOG_SKELETON_ITEMS_COUNT);
    expect(screen.queryByTestId(BLOG_CARD_TEST_ID)).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('should render blog cards when data is loaded', () => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: false,
      data: {data: mockBlogCards, meta: metaResponseMock},
    });

    const {container} = render(
      <MemoryRouter>
        <Blog title={TEST_TITLE} />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId(BLOG_CARD_SKELETON_TEST_ID)).not.toBeInTheDocument();
    expect(screen.getAllByTestId(BLOG_CARD_TEST_ID)).toHaveLength(mockBlogCards.length);
    expect(container).toMatchSnapshot();
  });
});
