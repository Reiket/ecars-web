import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {Section} from '@ecars/uiKit/Section';
import type {SectionContainerSize} from '@ecars/uiKit/Section/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  name: string;
  size?: SectionContainerSize;
  className?: string;
}

export const SectionWrapper: FC<Props> = ({children, block, name, size, className}) => {
  return (
    <div className={cn(className, name)}>
      <Section
        containerSize={size}
        block={block}
      >
        {children}
      </Section>
    </div>
  );
};
