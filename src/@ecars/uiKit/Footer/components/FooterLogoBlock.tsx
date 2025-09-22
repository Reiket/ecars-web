import type {FC} from 'react';
import {Fragment} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Logo} from 'ecars-web-lib';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';
import {footerSocialLinks} from '@ecars/uiKit/Footer/constants';

export const FooterLogoBlock: FC<ElementProps> = ({block}) => (
  <Fragment>
    <Logo
      block={block}
      src="./assets/images/logo-site/logo.svg"
    />
    <p className="footer__text">
      Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo
      duis.
    </p>
    <SocialList
      block={block}
      items={footerSocialLinks}
      color="gray"
    />
  </Fragment>
);
