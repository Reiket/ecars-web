import type {FC} from 'react';
import type {DropdownOption, ElementProps} from 'ecars-web-lib';
import {useDropdown, Dropdown} from 'ecars-web-lib';

export interface Props extends ElementProps {
  label: string;
  options: DropdownOption[];
}

export const TopbarDropdown: FC<Props> = ({label, block, options}) => {
  const {isDropdownOpen, handleOpenClick, handleOutside, selectedOption, handleSelect} = useDropdown(options);
  return (
    <div className="topbar__dropdown dropdown-topbar">
      <p className="dropdown-topbar__label">{label}</p>
      <Dropdown
        theme="dark"
        block={block}
        onClickOutside={handleOutside}
        isOpen={isDropdownOpen}
        handleOpen={handleOpenClick}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        options={options}
      />
    </div>
  );
};
