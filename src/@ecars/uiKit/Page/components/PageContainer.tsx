import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import type {PageContainerSize} from '@ecars/uiKit/Page/constants';
import {PAGE_CONTAINER_SIZE} from '@ecars/uiKit/Page/constants';

interface Props extends ElementProps {
  children: ReactNode;
  size: PageContainerSize;
}

export const PageContainer: FC<Props> = ({block, children, size = PAGE_CONTAINER_SIZE.LG}) => (
  <div className={cn(block, 'container', `container--${size}`)}>{children}</div>
);
