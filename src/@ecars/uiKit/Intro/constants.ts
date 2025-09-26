import {withBlockClass} from 'ecars-web-lib';
import {PageWrapper} from '@ecars/uiKit/Page/components/PageWrapper';

export const IntroWrapperHOC = withBlockClass(PageWrapper, 'intro-block');
export const BenefitsWrapperHOC = withBlockClass(PageWrapper, 'benefits');

export interface BenefitItemType {
  icon: string;
  title: string;
  text: string;
}

export const benefitsItemConfig: BenefitItemType[] = [
  {
    icon: '/assets/images/benefits/01.svg',
    title: 'Professional approach to clients',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    icon: '/assets/images/benefits/02.svg',
    title: 'Protect all payments',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    icon: '/assets/images/benefits/01.svg',
    title: 'Real reviews from clients',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];
