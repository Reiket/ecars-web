import type {ReactNode} from 'react';
import {withBlockClass} from 'ecars-web-lib';
import {PopupWrapper} from '@ecars/uiKit/Popup/components/PopupWrapper';

export interface PopupComponentType {
  children: ReactNode;
}

export const PopupWrapperHOC = withBlockClass(PopupWrapper, 'popup');
