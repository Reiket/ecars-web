import {render} from '@testing-library/react';
import {RegistrationPage} from '@ecars/pages/RegistrationPage/RegistrationPage';
import {MemoryRouter} from 'react-router-dom';

vi.mock('@ecars/core/hooks/useRegisterForm', () => ({
  useRegistrationForm: () => ({
    handleFormSubmit: vi.fn(),
    form: {
      register: () => ({}),
      control: {},
      formState: {errors: {}},
      getValues: () => ({}),
    },
  }),
}));

describe('Registration Page Component', () => {
  test('should render page correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
