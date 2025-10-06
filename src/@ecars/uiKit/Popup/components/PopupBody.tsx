import type {FC} from 'react';
import type {PopupComponentType} from '@ecars/uiKit/Popup/constants';

export const PopupBody: FC<PopupComponentType> = ({children}) => <div className="popup__body">{children}</div>;
