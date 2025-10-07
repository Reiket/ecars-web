import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  isOpen: boolean;
  children: ReactNode;
}

export const PopupWrapper: FC<Props> = ({isOpen, block, children}) => (
  <div
    className={cn(block, 'popup', {
      '_popup-open': isOpen,
    })}
  >
    {children}
  </div>
);
