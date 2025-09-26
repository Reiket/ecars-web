import type {FC} from 'react';
import type {BenefitItemType} from '@ecars/uiKit/Intro/constants';

export const IntroBenefitItem: FC<BenefitItemType> = ({icon, title, text}) => (
  <li className="benefits__item">
    <div className="benefits__icon">
      <img
        src={icon}
        alt="benefits_icon"
      />
    </div>
    <div className="benefits__info">
      <h4 className="benefits__title title-benefits-list">{title}</h4>
      <p className="benefits__text">{text}</p>
    </div>
  </li>
);
