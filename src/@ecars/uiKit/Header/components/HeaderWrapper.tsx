import type {FC, ReactNode} from 'react';
import {Section} from '@ecars/uiKit/Section';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';
import {useHeaderScroll} from '@ecars/services/hooks/useHeaderScroll';

export interface Props extends ElementProps {
  children: ReactNode;
}

export const HeaderWrapper: FC<Props> = ({children, block}) => {
  const {showHeader, isSticky} = useHeaderScroll();
  const classNames = cn('', 'header', {
    'sticky': isSticky,
    'show-header': showHeader,
  });
  return (
    <header className={classNames}>
      <Section.Container block={block}>{children}</Section.Container>
    </header>
  );
};
