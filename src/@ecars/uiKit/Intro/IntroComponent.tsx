import type {FC} from 'react';

import {Benefits, Intro} from '@ecars/uiKit/Intro';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export const IntroComponent: FC<ElementProps> = ({block}) => (
  <div className={cn(block, 'intro')}>
    <Intro.Block />
    <Benefits />
  </div>
);
