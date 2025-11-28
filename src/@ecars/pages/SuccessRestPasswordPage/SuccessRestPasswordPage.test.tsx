import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {SuccessRestPasswordPage} from '@ecars/pages/SuccessRestPasswordPage/SuccessRestPasswordPage';

describe('SuccessRestPasswordPage Component', () => {
  test('should render correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <SuccessRestPasswordPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
