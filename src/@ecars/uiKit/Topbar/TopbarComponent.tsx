import type {FC} from 'react';
import {Topbar} from '@ecars/uiKit/Topbar';
import {TOPBAR_TEST_ID} from '@ecars/uiKit/Topbar/constants';

export const TopbarComponent: FC = () => (
  <div
    data-testid={TOPBAR_TEST_ID}
    className="topbar"
  >
    <Topbar.Wrapper>
      <div className="topbar__body">
        <Topbar.Social />
        <Topbar.Tools />
      </div>
    </Topbar.Wrapper>
  </div>
);
