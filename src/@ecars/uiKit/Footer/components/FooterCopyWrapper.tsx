import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
  className?: string;
}

export const FooterCopyWrapper: FC<Props> = ({children, className}) => (
  <div className={cn(className, 'copy')}>{children}</div>
);
