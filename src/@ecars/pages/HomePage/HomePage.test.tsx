import {render} from '@testing-library/react';
import {HomePage} from '@ecars/pages/HomePage/HomePage';

describe('HomePage Component', () => {
  test('render component correctly', () => {
    const {container} = render(<HomePage />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
