import type {FC} from 'react';
import {Navbar} from '@ecars/uiKit/Header';
import type {ElementProps} from 'ecars-web-lib';

export interface Props extends ElementProps {
  isBurgerActive: boolean;
}

export const HeaderNavbar: FC<Props> = ({isBurgerActive, block}) => (
  <Navbar.Wrapper
    block={block}
    isBurgerActive={isBurgerActive}
  >
    <div className="navbar__overlay"></div>
    <Navbar.List />
  </Navbar.Wrapper>
);
