import type {FC} from 'react';
import {LinkWithIcon} from 'ecars-web-lib';
import {headerUtilsConfig} from '@ecars/uiKit/Header/constants';

export const HeaderUtils: FC = () => (
  <ul className="header__utils">
    {headerUtilsConfig.map(({to, icon}) => (
      <li
        key={to}
        className="header__util"
      >
        <LinkWithIcon
          to={to}
          color="dark"
        >
          {icon}
        </LinkWithIcon>
      </li>
    ))}
  </ul>
);
