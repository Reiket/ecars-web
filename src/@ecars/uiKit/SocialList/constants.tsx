import type {ComponentType, ReactNode} from 'react';
import {Icons} from 'ecars-web-lib';

export interface SocialItem {
  href: string;
  icon?: ReactNode;
  LeftIcon?: ComponentType;
  label?: string;
}

export const socialLinks: SocialItem[] = [
  {href: 'https://www.facebook.com', icon: <Icons.Facebook />},
  {href: 'https://twitter.com', icon: <Icons.Twitter />},
  {href: 'https://www.youtube.com', icon: <Icons.Youtube />},
  {href: 'https://www.instagram.com', icon: <Icons.Instagram />},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  {href: 'https://wa.me/971558119024', LeftIcon: Icons.Whatsapp, label: '+971 55 811 9024'},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  {href: 'mailto:request@example.com', LeftIcon: Icons.Email, label: 'request@example.com'},
];

export const contactsLinks = socialLinks.filter((item) => 'label' in item);
