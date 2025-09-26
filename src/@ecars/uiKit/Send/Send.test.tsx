import {render} from '@testing-library/react';
import {Send} from '@ecars/uiKit/Send';

describe('Send Component', () => {
  test('render component correctly', () => {
    const {container} = render(<Send />);
    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();
  });
});
