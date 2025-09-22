import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {Footer} from '@ecars/uiKit/Footer/index';

describe('Footer Component', () => {
  test('render component correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
