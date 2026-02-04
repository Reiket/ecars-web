import {blogApiSlice} from '@ecars/core/slices/api/blogApiSlice';
import type {IntegrationTestStore} from '@ecars/services/__mocks__/store';
import {setupIntegrationTestStore} from '@ecars/services/__mocks__/store';
import {mockFetchSuccess, setupFetchMocks} from '@ecars/services/__mocks__/fetch';
import {mockBlogRequest, mockBlogResponse} from '@ecars/core/slices/store/blog/mocks';

setupFetchMocks();

describe('Blog slice', () => {
  let store: IntegrationTestStore;

  beforeEach(() => {
    store = setupIntegrationTestStore();
  });

  test('getBlogArticles query should return data successfully', async () => {
    mockFetchSuccess(mockBlogResponse);
    const result = await store.dispatch(blogApiSlice.endpoints.getBlogArticles.initiate(mockBlogRequest));
    expect(result.status).toBe('fulfilled');
    expect(result.data).toEqual(mockBlogResponse);
  });
});
