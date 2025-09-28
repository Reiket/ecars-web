import {SendWrapperHOC} from '@ecars/uiKit/Send/constants';
import {SendComponent} from '@ecars/uiKit/Send/SendComponent';
import {SendColumn} from '@ecars/uiKit/Send/components/SendColumn';

export const Send = Object.assign(SendComponent, {
  Wrapper: SendWrapperHOC,
  Column: SendColumn,
});
