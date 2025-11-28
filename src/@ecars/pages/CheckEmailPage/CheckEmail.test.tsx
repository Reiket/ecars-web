import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {CheckEmailPage} from '@ecars/pages/CheckEmailPage/CheckEmailPage';

describe('CheckEmail Component', () => {
  test('should render correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <CheckEmailPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
