import type {FC} from 'react';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';
import type {ElementProps} from 'ecars-web-lib';
import {Button} from 'ecars-web-lib';

export const InquiryCtaComponent: FC<ElementProps> = ({block}) => (
  <InquiryCTA.Wrapper
    name="inquiry-cta"
    size="sm"
    block={block}
  >
    <div className="inquiry-cta__body">
      <div className="inquiry-cta__block">
        <h2 className="inquiry-cta__title block-title">
          Send an inquiry now and get the best offers suitable for your requirements
        </h2>
        <p className="inquiry-cta__text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <Button
        size="big"
        color="green"
      >
        Get a quote
      </Button>
    </div>
  </InquiryCTA.Wrapper>
);
