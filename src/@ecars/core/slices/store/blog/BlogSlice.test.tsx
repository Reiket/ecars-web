import {setCategory, setPage} from '@ecars/core/slices/store/blog/BlogSlice';
import {blogApiSlice} from '@ecars/core/slices/api/blogApiSlice';
import {setupIntegrationTestStore} from '@ecars/services/__mocks__/store';
import {mockFetchSuccess, setupFetchMocks} from '@ecars/services/__mocks__/fetch';
import {mockBlogResponse} from '@ecars/core/slices/store/blog/mocks';

setupFetchMocks();

const INITIAL_STATE = {
  activeCategory: null,
  currentPage: 1,
  pageSize: 6,
};

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
});
