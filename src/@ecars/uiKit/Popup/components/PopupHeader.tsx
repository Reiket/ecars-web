import type {FC} from 'react';
import type {PopupComponentType} from '@ecars/uiKit/Popup/constants';

export const PopupHeader: FC<PopupComponentType> = ({children}) => <div className="popup__header">{children}</div>;
