import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {Copy} from '@ecars/uiKit/Footer';

export const FooterCopy: FC<ElementProps> = ({block}) => (
  <Copy.Wrapper block={block}>
    <p className="copy__description">eCars © 2022. All rights reserved.</p>
    <Copy.List />
  </Copy.Wrapper>
);
