import type {FC} from 'react';
import {Intro} from '@ecars/uiKit/Intro';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';
import {Works} from '@ecars/uiKit/Works';
import {Send} from '@ecars/uiKit/Send';
import {HomePage} from '@ecars/pages/HomePage/index';
import {Blog} from '@ecars/uiKit/Blog';

export const HomePageComponent: FC = () => (
  <HomePage.Wrapper>
    <Intro />
    <InquiryCTA />
    <WhyChoose />
    <Works />
    <Blog />
    <Send />
  </HomePage.Wrapper>
);
