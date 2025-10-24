import {render} from '@testing-library/react';
import {HomePageComponent} from '@ecars/pages/HomePage/HomePageComponent';

describe('HomePage Component', () => {
  test('render component correctly', () => {
    const {container} = render(<HomePageComponent />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
