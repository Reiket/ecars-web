import {render} from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import {MemoryRouter} from 'react-router-dom';
import {LoginPage} from '@ecars/pages/LoginPage/LoginPage';
import {mockHandleSubmit} from '@ecars/services/__mocks__/tests';

vi.mock('@ecars/core/hooks/useLoginForm', () => ({
  useLoginForm: () => ({
    handleFormSubmit: mockHandleSubmit,
    form: {
      register: () => ({}),
      formState: {errors: {}},
    },
  }),
}));

describe('Login Page Component', () => {
  test('should render page correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
