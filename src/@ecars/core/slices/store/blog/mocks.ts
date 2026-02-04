import type {GetBlogArticlesRequest, GetBlogArticlesResponse} from '@ecars/core/api/blog-query';
import type {BlogArticle} from '@ecars/core/types/types';

export const mockBlogRequest: GetBlogArticlesRequest = {
  pageSize: 10,
  sort: 'createdAt:desc',
  populate: '*',
};

export const mockBlogCards: BlogArticle[] = [
  {
    id: 1,
    title: 'Test Article Title',
    description: 'Test description content',
    category: 'news',
    imageUrl: {
      formats: {
        thumbnail: {
          name: 'Test Image',
          url: 'https://test.com/image.jpg',
        },
      },
    },
    classnames: 'blog-card-style',
  }
]

export const mockBlogResponse: GetBlogArticlesResponse = {
  data: mockBlogCards,
};
