import type {IconsType} from 'ecars-web-lib';
import {Icons, withBlockClass} from 'ecars-web-lib';
import {BlogArticleWrapper} from '@ecars/uiKit/BlogArticle/components/BlogArticleWrapper';
import {formatDate} from '@ecars/services/helpers/formatDate';

export const BlogArticleWrapperHOC = withBlockClass(BlogArticleWrapper, 'blog-article');

interface BlogArticleInfoListType {
  text: string;
  icon: IconsType;
}

export const BLOG_ARTICLE_PARAMS = {
  populate: '*',
};

export const blogArticleInfoList = (added: string, views: number): BlogArticleInfoListType[] => [
  {
    text: formatDate(added),
    icon: Icons.Calendar,
  },
  {
    text: `${String(views)} views`,
    icon: Icons.OpenEye,
  },
  {
    text: 'tips, new car, UAE, Dubai',
    icon: Icons.TagLine,
  },
];

interface SocialConfig {
  name: string;
  icon: IconsType;
  getBaseHref: (url: string) => string;
}

export const blogArticleSocialConfig: SocialConfig[] = [
  {
    name: 'Facebook',
    icon: Icons.Facebook,
    getBaseHref: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: 'Twitter',
    icon: Icons.Twitter,
    getBaseHref: (url: string) => `https://twitter.com/intent/tweet?url=${url}`,
  },
  {
    name: 'Linkedin',
    icon: Icons.Linkedin,
    getBaseHref: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
];
