import type {FC} from 'react';
import type {ElementProps, RouterLinkColorType} from 'ecars-web-lib';
import {cn, LinkWithIcon} from 'ecars-web-lib';
import type {SocialItem} from '@ecars/uiKit/SocialList/constants';

interface Props extends ElementProps {
  items: SocialItem[];
  color: RouterLinkColorType;
}

export const SocialList: FC<Props> = ({block, items, color}) => (
  <ul className={cn(block, 'social')}>
    {items.map(({href, icon, LeftIcon, label}) => (
      <li
        key={href}
        className="social__item"
      >
        <LinkWithIcon
          block={block}
          href={href}
          LeftIcon={LeftIcon}
          color={color}
        >
          {icon ?? label}
        </LinkWithIcon>
      </li>
    ))}
  </ul>
);
