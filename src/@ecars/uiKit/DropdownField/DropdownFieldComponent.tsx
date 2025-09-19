import type {FC} from 'react';
import type {DropdownOption, DropdownThemeType, ElementProps} from 'ecars-web-lib';
import {Dropdown, useDropdown} from 'ecars-web-lib';
import {DropdownField} from '@ecars/uiKit/DropdownField';

export interface Props extends ElementProps {
  label: string;
  options: DropdownOption[];
  theme: DropdownThemeType;
}

export const DropdownFieldComponent: FC<Props> = ({label, options, block, theme}) => {
  const {isDropdownOpen, handleOpenClick, handleOutside, selectedOption, handleSelect} = useDropdown(options);
  return (
    <DropdownField.Wrapper
      label={label}
      block={block}
    >
      <Dropdown
        theme={theme}
        block={block}
        onClickOutside={handleOutside}
        isOpen={isDropdownOpen}
        handleOpen={handleOpenClick}
        onSelect={handleSelect}
        selectedOption={selectedOption}
        options={options}
      />
    </DropdownField.Wrapper>
  );
};
