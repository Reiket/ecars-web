import type {FC, ReactNode} from 'react';
import {Section} from '@ecars/uiKit/Section';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
}

export const TopbarWrapper: FC<Props> = ({children, block}) => <Section block={block}>{children}</Section>;
