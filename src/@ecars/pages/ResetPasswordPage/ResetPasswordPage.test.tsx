import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {ResetPasswordPage} from '@ecars/pages/ResetPasswordPage/ResetPasswordPage';
import {mockHandleSubmit} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/hooks/useResetPasswordForm', () => ({
  useResetPasswordForm: () => ({
    handleFormSubmit: mockHandleSubmit,
    form: {
      register: () => ({}),
      formState: {errors: {}},
    },
  }),
}));

describe('ResetPasswordPage Component', () => {
  test('should render correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <ResetPasswordPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
