import {withBlockClass} from 'ecars-web-lib';
import {SectionWrapper} from '@ecars/uiKit/Section/components/SectionWrapper';

export const WhyChooseWrapperHOC = withBlockClass(SectionWrapper, 'why-choose');

export interface WhyChooseItemType {
  title: string;
  text: string;
  id: number;
}

export const whyChooseItemConfig: WhyChooseItemType[] = [
  {
    id: 1,
    title: 'Some headline',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 2,
    title: 'Some headline',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 3,
    title: 'Some headline',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];
