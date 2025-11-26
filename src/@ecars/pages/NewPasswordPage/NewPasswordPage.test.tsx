import {describe, expect, test, vi} from 'vitest';
import {NewPasswordPage} from '@ecars/pages/NewPasswordPage/NewPasswordPage';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import {mockHandleSubmit} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/hooks/useNewPasswordForm', () => ({
  useNewPasswordForm: () => ({
    handleFormSubmit: mockHandleSubmit,
    form: {
      register: () => ({}),
      formState: {errors: {}},
    },
  }),
}));

describe('NewPasswordPage Component', () => {
  test('should render correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <NewPasswordPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
