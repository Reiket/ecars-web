import type {FC} from 'react';

import {Benefits, Intro} from '@ecars/uiKit/Intro';

export const IntroComponent: FC = () => (
  <div className="intro">
    <Intro.Block />
    <Benefits />
  </div>
);
