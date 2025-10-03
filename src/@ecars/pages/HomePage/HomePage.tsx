import type {FC} from 'react';
import {Fragment} from 'react';
import {Intro} from '@ecars/uiKit/Intro';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';
import {Works} from '@ecars/uiKit/Works';
import {Send} from '@ecars/uiKit/Send';

export const HomePage: FC = () => (
  <Fragment>
    <Intro />
    <InquiryCTA />
    <WhyChoose />
    <Works />
    <Send />
  </Fragment>
);
