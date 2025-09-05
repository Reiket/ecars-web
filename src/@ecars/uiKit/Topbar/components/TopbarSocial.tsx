import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {LinkWithIcon} from 'ecars-web-lib';
import {socialLinks} from '@ecars/uiKit/Topbar/constants';

export const TopbarSocial: FC<ElementProps> = ({block}) => (
  <ul className="topbar__social">
    {socialLinks.map(({href, icon, LeftIcon, label}) => (
      <li
        key={label}
        className="topbar__item"
      >
        <LinkWithIcon
          block={block}
          href={href}
          LeftIcon={LeftIcon}
          color="lightgray"
        >
          {icon ?? label}
        </LinkWithIcon>
      </li>
    ))}
  </ul>
);
