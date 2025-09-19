import type {FC} from 'react';
import type {ElementProps} from 'ecars-web-lib';
import {topbarDropdownsConfig} from '@ecars/uiKit/DropdownField/constants';
import {DropdownField} from '@ecars/uiKit/DropdownField';

export const HeaderNavbarTools: FC<ElementProps> = ({block}) => (
  <div className="navbar__tools">
    {topbarDropdownsConfig.map((dropdown) => (
      <DropdownField
        theme="light"
        key={dropdown.label}
        block={block}
        {...dropdown}
      />
    ))}
  </div>
);
