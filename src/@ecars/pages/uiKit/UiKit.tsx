import type {FC} from 'react';
import {Topbar} from '@ecars/uiKit/Topbar';
import {Header} from '@ecars/uiKit/Header';
import {Footer} from '@ecars/uiKit/Footer';
import {Send} from '@ecars/uiKit/Send';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';
import {Works} from '@ecars/uiKit/Works';
import {Intro} from '@ecars/uiKit/Intro';

export const UiKit: FC = () => (
  <>
    <Topbar />
    <Header />
    <Intro />
    <InquiryCTA />
    <WhyChoose />
    <Works />
    <Send />
    <Footer />
  </>
);
