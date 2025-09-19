import type {FC} from 'react';
import {navbarLinksConfig} from '@ecars/uiKit/Header/constants';
import type {ElementProps} from 'ecars-web-lib';
import {cn, NavLink} from 'ecars-web-lib';
import {HeaderNavbarTools} from '@ecars/uiKit/Header/components/HeaderNavbarTools';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';
import {socialLinks} from '@ecars/uiKit/SocialList/constants';

export const HeaderNavbarList: FC<ElementProps> = ({block}) => (
  <ul className="navbar__list">
    {navbarLinksConfig.map((link) => {
      const classNames = cn('', 'navbar__item', {
        '_hidden-util': link.isUtil,
      });
      return (
        <li
          className={classNames}
          key={link.to}
        >
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      );
    })}
    <li className="navbar__item">
      <HeaderNavbarTools block={block} />
    </li>
    <li className="navbar__item">
      <SocialList
        color="gray"
        block={block}
        items={socialLinks}
      />
    </li>
  </ul>
);
