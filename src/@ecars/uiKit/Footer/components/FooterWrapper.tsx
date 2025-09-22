import type {FC, ReactNode} from 'react';
import {Page} from '@ecars/uiKit/Page';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
}

export const FooterWrapper: FC<Props> = ({children, block}) => {
  return (
    <footer className="footer">
      <Page.Container block={block}>{children}</Page.Container>
    </footer>
  );
};
