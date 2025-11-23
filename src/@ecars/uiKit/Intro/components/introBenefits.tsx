import type {FC} from 'react';
import {Benefits} from '@ecars/uiKit/Intro';
import {benefitsItemConfig} from '@ecars/uiKit/Intro/constants';
import type {ElementProps} from 'ecars-web-lib';

export const IntroBenefits: FC<ElementProps> = ({block}) => (
  <Benefits.Wrapper
    block={block}
    name="benefits"
  >
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
