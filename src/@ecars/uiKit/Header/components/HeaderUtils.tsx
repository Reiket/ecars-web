import type {FC} from 'react';
import {LinkWithIcon} from 'ecars-web-lib';
import {headerUtilsConfig} from '@ecars/uiKit/Header/constants';
import {useAppSelector} from '@ecars/core/hooks/hooks';
import {selectCurrentUser} from '@ecars/core/slices/store/auth/authSlice';
import {PageUrls} from '@ecars/constants/page-urls';

export const HeaderUtils: FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const utils = headerUtilsConfig.map((item) =>
    item.to === PageUrls.LOGIN && user ? {...item, to: PageUrls.ACCOUNT} : item,
  );
  return (
    <ul className="header__utils">
      {utils.map(({to, icon}) => (
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
};
