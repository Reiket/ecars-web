import {FooterComponent} from '@ecars/uiKit/Footer/FooterComponent';
import {FooterCopyWrapperHOC, FooterWrapperHOC} from '@ecars/uiKit/Footer/constants';
import {FooterCopy} from '@ecars/uiKit/Footer/components/FooterCopy';
import {FooterCopyList} from '@ecars/uiKit/Footer/components/FooterCopyList';
import {FooterColumn} from '@ecars/uiKit/Footer/components/FooterColumn';
import {FooterLogoBlock} from '@ecars/uiKit/Footer/components/FooterLogoBlock';
import {FooterLinkList} from '@ecars/uiKit/Footer/components/FooterLinkList';

export const Footer = Object.assign(FooterComponent, {
  Wrapper: FooterWrapperHOC,
  Column: FooterColumn,
  LogoBlock: FooterLogoBlock,
  LinkList: FooterLinkList,
});

export const Copy = Object.assign(FooterCopy, {
  Wrapper: FooterCopyWrapperHOC,
  List: FooterCopyList,
});
