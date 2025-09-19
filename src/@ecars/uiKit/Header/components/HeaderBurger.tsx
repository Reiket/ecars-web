import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  isBurger: boolean;
  onClick: () => void;
}

export const HeaderBurger: FC<Props> = ({isBurger, onClick, block}) => (
  <button
    onClick={onClick}
    className={cn(block, 'burger', {
      '_active': isBurger,
    })}
  >
    <span></span>
  </button>
);
