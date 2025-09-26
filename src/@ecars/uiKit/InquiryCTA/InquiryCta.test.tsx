import {render} from '@testing-library/react';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';

describe('InquiryCta Component', () => {
  test('render component correctly', () => {
    const {container} = render(<InquiryCTA />);
    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();
  });
});
