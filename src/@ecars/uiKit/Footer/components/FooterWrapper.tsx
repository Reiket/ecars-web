import type {FC, ReactNode} from 'react';
import {Section} from '@ecars/uiKit/Section';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
}

export const FooterWrapper: FC<Props> = ({children, block}) => (
  <footer className="footer">
    <Section.Container block={block}>{children}</Section.Container>
  </footer>
);
