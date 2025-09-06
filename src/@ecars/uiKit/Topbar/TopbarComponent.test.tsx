import {render, screen} from '@testing-library/react';
import {Topbar} from '@ecars/uiKit/Topbar';
import {TOPBAR_TEST_ID} from '@ecars/uiKit/Topbar/constants';

describe('Topbar Component', () => {
  test(`component renders correctly`, () => {
    const {container} = render(<Topbar />);
    const topbar = screen.getByTestId(TOPBAR_TEST_ID);
    expect(topbar).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
