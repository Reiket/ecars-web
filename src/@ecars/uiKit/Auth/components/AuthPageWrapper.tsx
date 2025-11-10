import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {Section} from '@ecars/uiKit/Section';
import type {SectionContainerSize} from '@ecars/uiKit/Section/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  name: string;
  size?: SectionContainerSize;
}

export const AuthPageWrapper: FC<Props> = ({children, block, name, size}) => (
  <div className={cn('', name)}>
    <Section
      containerSize={size}
      block={block}
    >
      {children}
    </Section>
  </div>
);
