import {TopbarWrapper} from '@ecars/uiKit/Topbar/components/TopbarWrapper';
import {Icons, withBlockClass} from 'ecars-web-lib';
import type {ComponentType, ReactNode} from 'react';

export const TopbarWrapperHOC = withBlockClass(TopbarWrapper, 'topbar');
export const TOPBAR_TEST_ID = 'topbarTestId';
export interface DropdownOption {
  value: string;
  label?: ReactNode;
  name: string;
}

interface TopbarDropdownsConfig {
  label: string;
  options: DropdownOption[];
}

const shipToConfig = [
  {
    value: 'ca',
    name: 'Canada',
    label: (
      <img
        src="./assets/images/flags/canada.svg"
        alt="ca"
      />
    ),
  },
  {
    value: 'us',
    name: 'USA',
    label: (
      <img
        src="./assets/images/flags/usa.svg"
        alt="usa"
      />
    ),
  },
  {
    value: 'eu',
    name: 'Europe',
    label: (
      <img
        src="./assets/images/flags/europe.svg"
        alt="eu"
      />
    ),
  },
];

const currencyConfig = [
  {
    value: 'usd',
    name: 'US Dollar',
  },
  {
    value: 'eur',
    name: 'Euro',
  },
  {
    value: 'gbp',
    name: 'British Pound',
  },
];

export const topbarDropdownsConfig: TopbarDropdownsConfig[] = [
  {
    label: 'Ship to:',
    options: shipToConfig,
  },
  {
    label: 'Currency:',
    options: currencyConfig,
  },
];

interface SocialItem {
  href: string;
  icon?: ReactNode;
  leftIcon?: ComponentType;
  label?: string;
}

export const socialLinks: SocialItem[] = [
  {href: 'https://www.facebook.com', icon: <Icons.Facebook />},
  {href: 'https://twitter.com', icon: <Icons.Twitter />},
  {href: 'https://www.youtube.com', icon: <Icons.Youtube />},
  {href: 'https://www.instagram.com', icon: <Icons.Instagram />},
  {href: 'https://wa.me/971558119024', leftIcon: Icons.Whatsapp, label: '+971 55 811 9024'},
  {href: 'mailto:request@example.com', leftIcon: Icons.Email, label: 'request@example.com'},
];
