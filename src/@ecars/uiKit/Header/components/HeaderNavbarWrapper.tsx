import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
  isBurgerActive: boolean;
}

export const HeaderNavbarWrapper: FC<Props> = ({block, children, isBurgerActive}) => (
  <nav
    className={cn(block, 'navbar', {
      '_open-burger': isBurgerActive,
    })}
  >
    {children}
  </nav>
);
