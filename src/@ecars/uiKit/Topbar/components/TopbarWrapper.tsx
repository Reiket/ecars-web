import type {FC, ReactNode} from 'react';
import {Page} from '@ecars/uiKit/Page';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
}

export const TopbarWrapper: FC<Props> = ({children, block}) => <Page block={block}>{children}</Page>;
