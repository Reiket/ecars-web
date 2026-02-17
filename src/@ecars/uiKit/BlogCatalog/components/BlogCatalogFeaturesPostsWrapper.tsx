import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

interface Props extends ElementProps {
  children: ReactNode;
}

export const BlogCatalogFeaturesPostsWrapper: FC<Props> = ({children, block}) => {
  const classNames = cn(block, 'featured-posts');
  return <div className={classNames}>{children}</div>;
};
