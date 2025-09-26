import {IntroBlock} from '@ecars/uiKit/Intro/components/IntroBlock';
import {IntroWrapperHOC, BenefitsWrapperHOC} from '@ecars/uiKit/Intro/constants';
import {IntroBenefits} from '@ecars/uiKit/Intro/components/introBenefits';
import {IntroComponent} from '@ecars/uiKit/Intro/IntroComponent';
import {IntroBenefitItem} from '@ecars/uiKit/Intro/components/IntroBenefitsItem';

export const Intro = Object.assign(IntroComponent, {
  Wrapper: IntroWrapperHOC,
  Block: IntroBlock,
});

export const Benefits = Object.assign(IntroBenefits, {
  Wrapper: BenefitsWrapperHOC,
  Item: IntroBenefitItem,
});
