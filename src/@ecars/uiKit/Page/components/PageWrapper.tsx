import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {Page} from '@ecars/uiKit/Page';
import type {PageContainerSize} from '@ecars/uiKit/Page/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  name: string;
  size?: PageContainerSize;
}

export const PageWrapper: FC<Props> = ({children, block, name, size}) => (
  <div className={cn('', name)}>
    <Page
      containerSize={size}
      block={block}
    >
      {children}
    </Page>
  </div>
);
