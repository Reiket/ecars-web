import type {FC, ReactNode} from 'react';
import {BLOG_CARD_TEST_ID} from '@ecars/uiKit/BlogCard/constants';

interface Props {
  children: ReactNode;
  classNames: string;
}

export const BlogCardWrapper: FC<Props> = ({children, classNames}) => {
  return (
    <article
      data-testid={BLOG_CARD_TEST_ID}
      className={classNames}
    >
      {children}
    </article>
  );
};
