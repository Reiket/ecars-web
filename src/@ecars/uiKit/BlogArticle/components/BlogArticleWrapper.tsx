import type {FC} from 'react';
import {cn} from 'ecars-web-lib';
import {Section} from '@ecars/uiKit/Section';
import type {ElementWrapperProps} from '@ecars/uiKit/Section/components/SectionWrapper';

export const BlogArticleWrapper: FC<ElementWrapperProps> = ({children, block, name, size, className}) => (
  <article className={cn(className, name)}>
    <Section
      containerSize={size}
      block={block}
    >
      {children}
    </Section>
  </article>
);
