import type {FC} from 'react';
import type {PopupComponentType} from '@ecars/uiKit/Popup/constants';

export const PopupFooter: FC<PopupComponentType> = ({children}) => <div className="popup__footer">{children}</div>;
