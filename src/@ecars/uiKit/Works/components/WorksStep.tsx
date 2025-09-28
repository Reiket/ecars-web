import type {FC} from 'react';
import type {WorksStepType} from '@ecars/uiKit/Works/constants';

export const WorksStep: FC<WorksStepType> = ({id, title, text}) => (
  <li className="works-list__item">
    <span className="works-list__number">{id}</span>
    <h4 className="works-list__title title-works-list">{title}</h4>
    <p className="works-list__text">{text}</p>
  </li>
);
