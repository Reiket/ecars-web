import {HeaderComponent} from '@ecars/uiKit/Header/HeaderComponent';
import {HeaderNavbarWrapperHOC, HeaderWrapperHOC} from '@ecars/uiKit/Header/constants';
import {HeaderNavbar} from '@ecars/uiKit/Header/components/HeaderNavbar';
import {HeaderUtils} from '@ecars/uiKit/Header/components/HeaderUtils';
import {HeaderBurger} from '@ecars/uiKit/Header/components/HeaderBurger';
import {HeaderNavbarList} from '@ecars/uiKit/Header/components/HeaderNavbarList';

export const Header = Object.assign(HeaderComponent, {
  Wrapper: HeaderWrapperHOC,
  Utils: HeaderUtils,
  Burger: HeaderBurger,
});

export const Navbar = Object.assign(HeaderNavbar, {
  Wrapper: HeaderNavbarWrapperHOC,
  List: HeaderNavbarList,
});
