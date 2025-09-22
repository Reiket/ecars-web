import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

interface Props extends ElementProps {
  children: ReactNode;
}

export const FooterCopyWrapper: FC<Props> = ({children, block}) => <div className={cn(block, 'copy')}>{children}</div>;
