import type {FC} from 'react';
import type {WhyChooseItemType} from '@ecars/uiKit/WhyChoose/constants';

export const WhyChooseItem: FC<WhyChooseItemType> = ({title, text}) => (
  <li className="why-choose-list__item">
    <h4 className="why-choose-list__title title-why-choose-list">{title}</h4>
    <p className="why-choose-list__text">{text}</p>
  </li>
);
