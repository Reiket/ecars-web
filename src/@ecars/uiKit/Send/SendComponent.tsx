import type {FC} from 'react';
import {Send} from '@ecars/uiKit/Send';
import {sendItems} from '@ecars/uiKit/Send/constants';

export const SendComponent: FC = () => {
  return (
    <Send.Wrapper name="send">
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
};
