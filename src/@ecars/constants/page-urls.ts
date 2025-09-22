export const PageUrls = Object.freeze({
  LAYOUT: '/',
  UIKIT: '/uikit',
  CATALOG: '/catalog',
  ABOUT: '/about',
  Blog: '/blog',
  FAQ: '/faq',
  FAVORITES: '/favorites',
  LOGIN: '/login',
  NEWCARS: '/new-cars',
  USEDCARS: '/new-cars',
  PRIVACY: '/privacy',
  TERMS: '/terms',
});

export type PageUrlType = (typeof PageUrls)[keyof typeof PageUrls];
