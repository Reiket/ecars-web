import type {FC} from 'react';
import {copyLinks} from '@ecars/uiKit/Footer/constants';
import type {ElementProps} from 'ecars-web-lib';
import {RouterLink} from 'ecars-web-lib';

export const FooterCopyList: FC<ElementProps> = ({block}) => (
  <ul className="copy__list">
    {copyLinks.map((link) => (
      <li
        key={link.label}
        className="copy__item"
      >
        <RouterLink
          block={block}
          to={link.to}
          color="gray"
        >
          {link.label}
        </RouterLink>
      </li>
    ))}
  </ul>
);
