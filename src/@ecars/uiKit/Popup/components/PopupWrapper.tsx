import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {POPUP_TEST_ID} from '@ecars/uiKit/Popup/constants';

interface Props extends ElementProps {
  isOpen: boolean;
  children: ReactNode;
}

export const PopupWrapper: FC<Props> = ({isOpen, block, children}) => (
  <div
    data-test-id={POPUP_TEST_ID}
    className={cn(block, 'popup', {
      'open': isOpen,
    })}
  >
    {children}
  </div>
);
