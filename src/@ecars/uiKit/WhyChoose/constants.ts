import {withBlockClass} from 'ecars-web-lib';
import {PageWrapper} from '@ecars/uiKit/Page/components/PageWrapper';

export const WhyChooseWrapperHOC = withBlockClass(PageWrapper, 'why-choose');

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
