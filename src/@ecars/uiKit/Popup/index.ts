import {PopupComponent} from '@ecars/uiKit/Popup/PopupComponent';
import {PopupFooter} from '@ecars/uiKit/Popup/components/PopupFooter';
import {PopupHeader} from '@ecars/uiKit/Popup/components/PopupHeader';
import {PopupBody} from '@ecars/uiKit/Popup/components/PopupBody';
import {PopupWrapperHOC} from '@ecars/uiKit/Popup/constants';

export const Popup = Object.assign(PopupComponent, {
  Footer: PopupFooter,
  Wrapper: PopupWrapperHOC,
  Header: PopupHeader,
  Body: PopupBody,
});
