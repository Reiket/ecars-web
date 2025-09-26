import type {FC} from 'react';
import {Benefits} from '@ecars/uiKit/Intro';
import {benefitsItemConfig} from '@ecars/uiKit/Intro/constants';

export const IntroBenefits: FC = () => (
  <Benefits.Wrapper name="benefits">
    <div className="benefits__body">
      <ul className="benefits__list">
        {benefitsItemConfig.map((benefit) => (
          <Benefits.Item
            key={benefit.title}
            {...benefit}
          />
        ))}
      </ul>
    </div>
  </Benefits.Wrapper>
);
