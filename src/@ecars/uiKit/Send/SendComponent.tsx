import type {FC} from 'react';
import {Send} from '@ecars/uiKit/Send';
import {sendItems} from '@ecars/uiKit/Send/constants';
import type {ElementProps} from 'ecars-web-lib';

export const SendComponent: FC<ElementProps> = ({block}) => (
  <Send.Wrapper
    name="send"
    block={block}
  >
    <div className="send__body">
      {sendItems.map((item) => (
        <Send.Column
          key={item.title}
          {...item}
        />
      ))}
    </div>
  </Send.Wrapper>
);
