import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import type {SectionContainerSize} from '@ecars/uiKit/Section/constants';
import {SECTION_CONTAINER_SIZE} from '@ecars/uiKit/Section/constants';

export interface Props extends ElementProps {
  children: ReactNode;
  size?: SectionContainerSize;
}

export const SectionContainer: FC<Props> = ({block, children, size = SECTION_CONTAINER_SIZE.LG}) => (
  <div className={cn(block, 'container', `container--${size}`)}>{children}</div>
);
