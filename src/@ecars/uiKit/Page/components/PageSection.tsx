import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

interface Props extends ElementProps {
  children: ReactNode;
}

export const PageSection: FC<Props> = ({block, children}) => (
  <section className={cn(block, 'section')}>{children}</section>
);
