import {Icons, withBlockClass} from 'ecars-web-lib';
import {SectionWrapper} from '@ecars/uiKit/Section/components/SectionWrapper';
import type {ReactNode} from 'react';
import type {ButtonColorType} from 'ecars-web-lib/dist/components/Button/constants';

export const SendWrapperHOC = withBlockClass(SectionWrapper, 'send');

interface SendItemType {
  icon: ReactNode;
  title: string;
  text: string;
  buttonText: string;
  buttonColor: ButtonColorType;
}

export const sendItems: SendItemType[] = [
  {
    icon: <Icons.Account />,
    title: 'Send an inquiry and our managers will offer you the best deals.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    buttonText: 'Get a quote',
    buttonColor: 'green',
  },
  {
    icon: <Icons.Email />,
    title: 'Do you still have questions? Contact us for answers.',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    buttonText: 'Contact Us',
    buttonColor: 'white',
  },
];
