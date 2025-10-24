import type {FC} from 'react';
import {Works} from '@ecars/uiKit/Works';
import type {ElementProps} from 'ecars-web-lib';

export const WorksComponent: FC<ElementProps> = ({block}) => (
  <Works.Wrapper
    name="works"
    block={block}
  >
    <div className="works__body">
      <h2 className="works__title section-title">How it works</h2>
      <p className="works__text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit.
      </p>
      <Works.List />
    </div>
  </Works.Wrapper>
);
