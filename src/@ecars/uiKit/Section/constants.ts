export const SECTION_CONTAINER_SIZE = Object.freeze({
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
});

export type SectionContainerSize = (typeof SECTION_CONTAINER_SIZE)[keyof typeof SECTION_CONTAINER_SIZE];
