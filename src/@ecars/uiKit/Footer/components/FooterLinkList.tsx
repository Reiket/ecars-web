import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {RouterLink} from 'ecars-web-lib';
import type {FooterLink} from '@ecars/uiKit/Footer/constants';

export interface Props extends ElementProps {
  links: FooterLink[];
}

export const FooterLinkList: FC<Props> = ({links, block}) => (
  <ul className="footer__list">
    {links.map(({label, to}) => (
      <li
        key={label}
        className="footer__item"
      >
        <RouterLink
          block={block}
          to={to}
          color="gray"
        >
          {label}
        </RouterLink>
      </li>
    ))}
  </ul>
);
