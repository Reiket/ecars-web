import type {FC, ReactNode} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {cn} from 'ecars-web-lib';

export interface Props extends ElementProps {
  label: string;
  children: ReactNode;
}

export const DropdownFieldWrapper: FC<Props> = ({label, block, children}) => {
  return (
    <div className={cn(block, 'dropdown-field')}>
      <p className="dropdown-field__label">{label}</p>
      {children}
    </div>
  );
};
