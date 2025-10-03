import type {FC, ReactNode} from 'react';
import {Section} from '@ecars/uiKit/Section/index';
import type {SectionContainerSize} from '@ecars/uiKit/Section/constants';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  children: ReactNode;
  containerSize?: SectionContainerSize;
}

export const SectionComponent: FC<Props> = ({block, children, containerSize}) => (
  <section className={cn(block, 'section')}>
    <Section.Container
      block={block}
      size={containerSize}
    >
      {children}
    </Section.Container>
  </section>
);
