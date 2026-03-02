import type {GetBlogArticlesRequest, GetBlogArticlesResponse} from '@ecars/core/api/blog-query';
import type {BlogArticleType} from '@ecars/core/types/types';
import {metaResponseMock} from '@ecars/services/__mocks__/mocks';

export const mockBlogRequest: GetBlogArticlesRequest = {
  pageSize: 10,
  sort: 'createdAt:desc',
  populate: '*',
};

export const mockBlogCards: BlogArticleType[] = [
  {
    id: 1,
    title: 'Test Article Title',
    description: 'Test description content',
    views: 1000,
    added: '2024-03-01',
    documentId: '1',
    category: 'news',
    content: [
      {
        id: 1,
        title: 'test',
        text: 'test',
      },
    ],
    imageUrl: {
      formats: {
        thumbnail: {
          name: 'Test Image',
          url: 'https://test.com/image.jpg',
        },
      },
    },
    classnames: 'blog-card-style',
  },
];

export const mockBlogResponse: GetBlogArticlesResponse = {
  data: mockBlogCards,
  meta: metaResponseMock,
};
