import {DropdownField} from '@ecars/uiKit/DropdownField';
import {render, screen} from '@testing-library/react';
import type {DropdownOption} from 'ecars-web-lib';

const options: DropdownOption[] = [
  {name: 'Option 1', value: '1'},
  {name: 'Option 2', value: '2'},
];

describe('DropdownField Component', () => {
  test('render component correctly', () => {
    const mockLabel = 'Test Label';
    const {container} = render(
      <DropdownField
        theme="dark"
        options={options}
        label={mockLabel}
      />,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });
});
