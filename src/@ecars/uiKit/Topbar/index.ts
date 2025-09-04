import {TopbarWrapperHOC} from '@ecars/uiKit/Topbar/constants';
import {TopbarComponent} from '@ecars/uiKit/Topbar/TopbarComponent';
import {TopbarDropdown} from '@ecars/uiKit/Topbar/components/TopbarDropdown';
import {TopbarTools} from '@ecars/uiKit/Topbar/components/TopbarTools';
import {TopbarSocial} from '@ecars/uiKit/Topbar/components/TopbarSocial';

export const Topbar = Object.assign(TopbarComponent, {
  Wrapper: TopbarWrapperHOC,
  Dropdown: TopbarDropdown,
  Tools: TopbarTools,
  Social: TopbarSocial,
});
