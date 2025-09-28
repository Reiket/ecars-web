import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {whyChooseItemConfig} from '@ecars/uiKit/WhyChoose/constants';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';

export const WhyChooseList: FC<ElementProps> = ({block}) => (
  <ul className={cn(block, 'why-choose-list')}>
    {whyChooseItemConfig.map((item) => (
      <WhyChoose.Item
        key={item.id}
        {...item}
      />
    ))}
  </ul>
);
