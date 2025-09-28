import {render} from '@testing-library/react';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';

describe('WhyChoose Component', () => {
  test('render component correctly', () => {
    const {container} = render(<WhyChoose />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
