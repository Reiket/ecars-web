export const BLOG_SKELETON_TYPE = Object.freeze({
  CARD: 'card',
});

export type BlogSkeletonType = (typeof BLOG_SKELETON_TYPE)[keyof typeof BLOG_SKELETON_TYPE];
