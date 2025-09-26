import {render} from '@testing-library/react';
import {Works} from '@ecars/uiKit/Works/index';

describe('Works Component', () => {
  test('render component correctly', () => {
    const {container} = render(<Works />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
