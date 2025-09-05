import type {FC, ReactNode} from 'react';
import {Page} from '@ecars/uiKit/Page';
import type {PageContainerSize} from '@ecars/uiKit/Page/constants';
import type {ElementProps} from 'ecars-web-lib';

interface Props extends ElementProps {
  children: ReactNode;
  containerSize?: PageContainerSize;
}

export const PageComponent: FC<Props> = ({block, children, containerSize}) => (
  <Page.Section block={block}>
    <Page.Container
      block={block}
      size={containerSize}
    >
      {children}
    </Page.Container>
  </Page.Section>
);
