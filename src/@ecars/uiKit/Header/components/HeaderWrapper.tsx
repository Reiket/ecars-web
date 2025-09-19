import type {FC, ReactNode} from 'react';
import {Page} from '@ecars/uiKit/Page';
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
      <Page.Container block={block}>{children}</Page.Container>
    </header>
  );
};
