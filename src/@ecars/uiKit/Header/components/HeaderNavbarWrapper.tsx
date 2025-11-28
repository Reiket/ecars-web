import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
  isBurgerActive: boolean;
  className?: string;
}

export const HeaderNavbarWrapper: FC<Props> = ({className, children, isBurgerActive}) => (
  <nav
    className={cn(className, 'navbar', {
      '_open-burger': isBurgerActive,
    })}
  >
    {children}
  </nav>
);
