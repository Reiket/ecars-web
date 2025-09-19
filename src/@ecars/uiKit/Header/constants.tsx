import {Icons, withBlockClass} from 'ecars-web-lib';
import {HeaderWrapper} from '@ecars/uiKit/Header/components/HeaderWrapper';
import type {PageUrlType} from '@ecars/constants/page-urls';
import {PageUrls} from '@ecars/constants/page-urls';
import {HeaderNavbarWrapper} from '@ecars/uiKit/Header/components/HeaderNavbarWrapper';
import type {ReactNode} from 'react';

export const HeaderWrapperHOC = withBlockClass(HeaderWrapper, 'header');
export const HeaderNavbarWrapperHOC = withBlockClass(HeaderNavbarWrapper, 'navbar');

interface NavbarLink {
  to: PageUrlType;
  label: string;
  isUtil?: boolean;
}

interface HeaderUtil {
  to: PageUrlType;
  icon: ReactNode;
}

export const navbarLinksConfig: NavbarLink[] = [
  {
    to: PageUrls.CATALOG,
    label: 'All Cars',
  },
  {
    to: PageUrls.ABOUT,
    label: 'About Us',
  },
  {
    to: PageUrls.Blog,
    label: 'Blog',
  },
  {
    to: PageUrls.FAQ,
    label: 'FAQ',
  },
  {
    to: PageUrls.FAVORITES,
    label: 'Favorites',
    isUtil: true,
  },
  {
    to: PageUrls.LOGIN,
    label: 'Login',
    isUtil: true,
  },
];

export const headerUtilsConfig: HeaderUtil[] = [
  {to: PageUrls.FAVORITES, icon: <Icons.FavoriteSolid />},
  {to: PageUrls.LOGIN, icon: <Icons.Account />},
];

export const headerTestScenarios = [
  {
    desc: 'initial state',
    scrolls: [0],
    expected: {sticky: false, showHeader: true},
  },
  {
    desc: 'scrolled down below topbarHeight → sticky true, showHeader false',
    scrolls: [100],
    expected: {sticky: true, showHeader: false},
  },
  {
    desc: 'scroll up again → sticky true, showHeader true',
    scrolls: [150, 50],
    expected: {sticky: true, showHeader: true},
  },
];
