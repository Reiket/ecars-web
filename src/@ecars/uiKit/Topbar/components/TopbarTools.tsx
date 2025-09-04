import type {FC} from 'react';
import {topbarDropdownsConfig} from '@ecars/uiKit/Topbar/constants';
import {Topbar} from '@ecars/uiKit/Topbar';
import type {ElementProps} from 'ecars-web-lib';

export const TopbarTools: FC<ElementProps> = ({block}) => (
  <div className="topbar__tools">
    {topbarDropdownsConfig.map((dropdown) => (
      <Topbar.Dropdown
        key={dropdown.label}
        block={block}
        {...dropdown}
      />
    ))}
  </div>
);
