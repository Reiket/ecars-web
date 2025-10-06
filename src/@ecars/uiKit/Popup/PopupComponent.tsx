import type {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';
import type {ElementProps} from 'ecars-web-lib';
import {ButtonWithIcon, Icons, useClickOutside} from 'ecars-web-lib';
import {Popup} from '@ecars/uiKit/Popup';

interface Props extends ElementProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const PopupComponent: FC<Props> = ({isOpen, onClose, children}) => {
  const ref = useClickOutside(onClose);
  return createPortal(
    <Popup.Wrapper isOpen={isOpen}>
      <div
        className="popup__inner"
        ref={ref}
      >
        <div className="popup__content">
          <ButtonWithIcon
            onClick={onClose}
            size="small"
            color="gray"
          >
            <Icons.Favorite />
          </ButtonWithIcon>
          {children}
        </div>
      </div>
    </Popup.Wrapper>,
    document.body,
  );
};
