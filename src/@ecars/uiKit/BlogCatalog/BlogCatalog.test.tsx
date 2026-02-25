import {render, screen} from '@testing-library/react';
import {BlogCatalog} from '@ecars/uiKit/BlogCatalog/index';
import {useBlogContent} from '@ecars/core/hooks/useBlogContent';
import {useBlogNavigation} from '@ecars/core/hooks/useBlogNavigation';
import {useAppSelector} from '@ecars/core/hooks/hooks';
import {useWindowWidth} from '@ecars/services/hooks/useWindowWidth';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {MemoryRouter} from 'react-router-dom';
import {mockBlogResponse} from '@ecars/core/slices/store/blog/mocks';
import {FEATURED_CONTENT_TEST_ID, FEATURED_SLIDER_TEST_ID} from '@ecars/uiKit/BlogCatalog/constants';
import type {ReactNode} from 'react';
import type * as EcarsWebLib from 'ecars-web-lib';
import {beforeEach, describe, expect, test, vi} from 'vitest';

vi.mock('@ecars/core/hooks/useBlogContent');
vi.mock('@ecars/core/hooks/useBlogNavigation');
vi.mock('@ecars/core/hooks/hooks');
vi.mock('@ecars/services/hooks/useWindowWidth');
vi.mock('@ecars/core/hooks/useBlog');

vi.mock('@ecars/uiKit/BlogCard', () => ({
  BlogCard: () => <div data-testid="blog-card">BlogCard</div>,
}));

vi.mock('ecars-web-lib', async (importOriginal) => {
  const actual = await importOriginal<typeof EcarsWebLib>();
  return {
    ...actual,
    Slider: Object.assign(({children}: {children: ReactNode}) => <div data-testid="slider">{children}</div>, {
      Slide: ({children}: {children: ReactNode}) => <div data-testid="slide">{children}</div>,
    }),
  };
});

describe('BlogCatalog Component', () => {
  const DEFAULT_REDUX_STATE = {
    activeCategory: null,
    currentPage: 1,
    pageSize: 6,
  };

  const DEFAULT_BLOG_CONTENT = {
    articlesData: mockBlogResponse,
    categories: ['news', 'reviews'],
    pageCount: 2,
    pagesArray: [1, 2],
    isCategoriesLoading: false,
    isPostsLoading: false,
  };

  const DEFAULT_NAV_HANDLERS = {
    handleCategoryClick: vi.fn(),
    handlePageChange: vi.fn(),
    handleReset: vi.fn(),
    handleNextPage: vi.fn(),
    handlePrevPage: vi.fn(),
  };

  const LAYOUT_SCENARIOS = [
    {isMobile: false, testId: FEATURED_CONTENT_TEST_ID, label: 'grid'},
    {isMobile: true, testId: FEATURED_SLIDER_TEST_ID, label: 'slider'},
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useAppSelector).mockReturnValue(DEFAULT_REDUX_STATE);
    vi.mocked(useBlogContent).mockReturnValue(DEFAULT_BLOG_CONTENT);
    vi.mocked(useBlogNavigation).mockReturnValue(DEFAULT_NAV_HANDLERS);
    vi.mocked(useBlog).mockReturnValue({data: mockBlogResponse, isLoading: false});
    vi.mocked(useWindowWidth).mockReturnValue(false);
  });

  const renderComponent = () =>
    render(
      <MemoryRouter>
        <BlogCatalog />
      </MemoryRouter>,
    );

  test.each(LAYOUT_SCENARIOS)('displays featured posts in $label layout', ({isMobile, testId}) => {
    vi.mocked(useWindowWidth).mockReturnValue(isMobile);

    const {container} = renderComponent();

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('displays loading state when fetching data', () => {
    vi.mocked(useWindowWidth).mockReturnValue(false);
    vi.mocked(useBlog).mockReturnValue({data: undefined, isLoading: true});
    vi.mocked(useBlogContent).mockReturnValue({
      ...DEFAULT_BLOG_CONTENT,
      isPostsLoading: true,
      isCategoriesLoading: true,
      articlesData: undefined,
    });

    const {container} = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
