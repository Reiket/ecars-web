export const PAGE_CONTAINER_SIZE = Object.freeze({
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
});

export type PageContainerSize = (typeof PAGE_CONTAINER_SIZE)[keyof typeof PAGE_CONTAINER_SIZE];
