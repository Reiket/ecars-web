import {render} from '@testing-library/react';
import {Intro} from '@ecars/uiKit/Intro';

describe('Intro Component', () => {
  test('render component correctly', () => {
    const {container} = render(<Intro />);
    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();
  });
});
