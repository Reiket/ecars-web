import {withBlockClass} from 'ecars-web-lib';
import {FooterWrapper} from '@ecars/uiKit/Footer/components/FooterWrapper';
import {socialLinks} from '@ecars/uiKit/SocialList/constants';
import {PageUrls} from '@ecars/constants/page-urls';
import {FooterCopyWrapper} from '@ecars/uiKit/Footer/components/FooterCopyWrapper';

export const FooterWrapperHOC = withBlockClass(FooterWrapper, 'footer');
export const FooterCopyWrapperHOC = withBlockClass(FooterCopyWrapper, 'copy');
export const footerSocialLinks = socialLinks.filter((item) => !('label' in item));
export const footerContactsLinks = socialLinks.filter((item) => 'label' in item);

export const copyLinks = [
  {
    label: 'Privacy Policy',
    href: PageUrls.PRIVACY,
  },
  {
    label: 'Terms & Conditions',
    href: PageUrls.TERMS,
  },
];

export interface FooterLink {
  label: string;
  to: string;
}

export const companyLinks: FooterLink[] = [
  {label: 'About Us', to: PageUrls.ABOUT},
  {label: 'Blog', to: PageUrls.Blog},
  {label: 'FAQ', to: PageUrls.FAQ},
];

export const carsLinks: FooterLink[] = [
  {label: 'Special offers', to: '/'},
  {label: 'New cars', to: PageUrls.NEWCARS},
  {label: 'Used cars', to: PageUrls.USEDCARS},
  {label: 'Brands', to: '/'},
];
