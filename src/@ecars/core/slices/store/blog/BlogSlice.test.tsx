import {setCategory, setPage} from '@ecars/core/slices/store/blog/BlogSlice';
import {blogApiSlice} from '@ecars/core/slices/api/blogApiSlice';
import {setupIntegrationTestStore} from '@ecars/services/__mocks__/store';
import {mockFetchSuccess, setupFetchMocks} from '@ecars/services/__mocks__/fetch';
import {mockBlogCards, mockBlogResponse} from '@ecars/core/slices/store/blog/mocks';
import {getBlogArticlesQuery, getBlogArticleByIdQuery} from '@ecars/core/api/blog-query';
import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import {STRAPI_PARAMS} from '@ecars/constants/strapi-params';

setupFetchMocks();

const INITIAL_STATE = {
  activeCategory: null,
  currentPage: 1,
  pageSize: 6,
};

describe('Blog Queries Builders', () => {
  describe('getBlogArticlesQuery', () => {
    test('returns base parameters when no arguments are provided', () => {
      const result = getBlogArticlesQuery();

      expect(result.url).toBe(API_ENDPOINTS.BLOG);
      expect(result.method).toBe('GET');
      expect(result.params).toHaveProperty('pagination');
      expect(result.params).toHaveProperty('filters');
      expect(result.params?.[STRAPI_PARAMS.POPULATE]).toBeUndefined();
      expect(result.params?.[STRAPI_PARAMS.FIELDS]).toBeUndefined();
      expect(result.params?.sort).toBeUndefined();
    });

    test('formats parameters correctly with pagination, filters, and fields', () => {
      const requestParams = {
        page: 2,
        pageSize: 10,
        limit: 5,
        sort: 'createdAt:desc',
        image: '*',
        fields: ['title', 'slug'],
        recommendedStatus: true,
        filters: {category: {$eq: 'EV'}},
      };

      const result = getBlogArticlesQuery(requestParams);

      expect(result.params).toEqual({
        [STRAPI_PARAMS.POPULATE]: '*',
        [STRAPI_PARAMS.FIELDS]: ['title', 'slug'],
        pagination: {
          page: 2,
          pageSize: 10,
          limit: 5,
        },
        filters: {
          category: {$eq: 'EV'},
          [STRAPI_PARAMS.RECOMMENDED_STATUS]: {
            $eq: true,
          },
        },
        sort: 'createdAt:desc',
      });
    });
  });

  describe('getBlogArticleByIdQuery', () => {
    test('formats correct query for fetching article by ID', () => {
      const result = getBlogArticleByIdQuery({id: '123'});

      expect(result.url).toBe(`${API_ENDPOINTS.BLOG}/123`);
      expect(result.method).toBe('GET');
      expect(result.params).toEqual({
        [STRAPI_PARAMS.POPULATE]: undefined,
      });
    });

    test('adds populate parameter if provided', () => {
      const result = getBlogArticleByIdQuery({id: '123', populate: 'deep'});

      expect(result.params).toEqual({
        [STRAPI_PARAMS.POPULATE]: 'deep',
      });
    });
  });
});

describe('Blog slice', () => {
  let store = setupIntegrationTestStore();
  const getBlogState = () => store.getState().blog;

  beforeEach(() => {
    store = setupIntegrationTestStore();
  });

  test('initial state matches constant', () => {
    expect(getBlogState()).toEqual(INITIAL_STATE);
  });

  test.each([
    {
      desc: 'updates currentPage',
      action: setPage(5),
      expected: {currentPage: 5},
    },
    {
      desc: 'sets category and resets page',
      action: setCategory('EV'),
      setup: () => store.dispatch(setPage(10)),
      expected: {activeCategory: 'EV', currentPage: 1},
    },
  ])('$desc', ({action, setup, expected}) => {
    setup?.();
    store.dispatch(action);
    expect(getBlogState()).toMatchObject(expected);
  });

  test('fetches blog articles successfully', async () => {
    mockFetchSuccess(mockBlogResponse);

    const {status, data} = await store.dispatch(blogApiSlice.endpoints.getBlogArticles.initiate({}));

    expect(status).toBe('fulfilled');
    expect(data).toEqual(mockBlogResponse);
  });

  test('fetches single blog article by ID successfully', async () => {
    mockFetchSuccess(mockBlogCards);

    const {status, data} = await store.dispatch(blogApiSlice.endpoints.getBlogArticleById.initiate({id: '1'}));

    expect(status).toBe('fulfilled');
    expect(data).toEqual(mockBlogCards);
  });
});
