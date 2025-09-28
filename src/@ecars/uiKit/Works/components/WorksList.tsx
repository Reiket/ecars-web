import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {worksStepConfig} from '@ecars/uiKit/Works/constants';
import {Works} from '@ecars/uiKit/Works';

export const WorksList: FC<ElementProps> = ({block}) => (
  <ol className={cn(block, 'works-list')}>
    {worksStepConfig.map((step) => (
      <Works.Step
        key={step.id}
        {...step}
      />
    ))}
  </ol>
);
