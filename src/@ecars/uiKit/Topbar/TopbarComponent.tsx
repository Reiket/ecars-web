import type {FC} from 'react';
import {Topbar} from '@ecars/uiKit/Topbar';
import {TOPBAR_TEST_ID} from '@ecars/uiKit/Topbar/constants';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';
import {socialLinks} from '@ecars/uiKit/SocialList/constants';

export const TopbarComponent: FC = () => (
  <div
    data-testid={TOPBAR_TEST_ID}
    className="topbar"
  >
    <Topbar.Wrapper>
      <div className="topbar__body">
        <SocialList
          items={socialLinks}
          color="lightgray"
        />
        <Topbar.Tools />
      </div>
    </Topbar.Wrapper>
  </div>
);
