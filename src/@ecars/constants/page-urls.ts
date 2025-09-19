export const PageUrls = Object.freeze({
  LAYOUT: '/',
  UIKIT: '/uikit',
  CATALOG: '/catalog',
  ABOUT: '/about',
  Blog: '/blog',
  FAQ: '/faq',
  FAVORITES: '/favorites',
  LOGIN: '/login',
});

export type PageUrlType = (typeof PageUrls)[keyof typeof PageUrls];
