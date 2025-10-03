import {withBlockClass} from 'ecars-web-lib';
import {SectionWrapper} from '@ecars/uiKit/Section/components/SectionWrapper';

export const WorksWrapperHOC = withBlockClass(SectionWrapper, 'works');

export interface WorksStepType {
  title: string;
  text: string;
  id: number;
}

export const worksStepConfig: WorksStepType[] = [
  {
    id: 1,
    title: 'Find a car',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 2,
    title: 'Extensive inspection',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 3,
    title: 'Safe Buying',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    id: 4,
    title: 'Delivery and support',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];
