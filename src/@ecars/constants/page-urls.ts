export const PageUrls = Object.freeze({
  LAYOUT: '/',
  UIKIT: '/uikit',
  CATALOG: '/catalog',
  ABOUT: '/about',
  Blog: '/blog',
  FAQ: '/faq',
  FAVORITES: '/favorites',
  LOGIN: '/login',
  REGISTRATION: '/registration',
  NEWCARS: '/new-cars',
  USEDCARS: '/new-cars',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  RESET_PASSWORD: '/reset-password',
  CHECK_EMAIL: '/check-email',
  SET_NEW_PASS: '/set-new-pass',
  SUCCESS_REST_PASS: '/success-rest-pass',
});

export type PageUrlType = (typeof PageUrls)[keyof typeof PageUrls];
