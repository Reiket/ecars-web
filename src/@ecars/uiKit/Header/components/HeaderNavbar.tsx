import type {FC} from 'react';
import {Navbar} from '@ecars/uiKit/Header';

interface Props {
  isBurgerActive: boolean;
}

export const HeaderNavbar: FC<Props> = ({isBurgerActive}) => (
  <Navbar.Wrapper isBurgerActive={isBurgerActive}>
    <div className="navbar__overlay"></div>
    <Navbar.List />
  </Navbar.Wrapper>
);
