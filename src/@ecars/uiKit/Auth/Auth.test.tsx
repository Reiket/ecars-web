import {fireEvent, render, screen} from '@testing-library/react';
import {AuthForm} from '@ecars/uiKit/Auth/components/AuthForm';
import {MemoryRouter} from 'react-router-dom';

describe('AuthForm Component', () => {
  const resetFormOptions = [true, false];
  const baseProps = {
    onSubmit: vi.fn(),
    buttonText: 'Submit',
  };

  const renderComponent = (props = {}) => {
    return render(
      <MemoryRouter>
        <AuthForm
          {...baseProps}
          {...props}
        />
      </MemoryRouter>,
    );
  };

  test('should component renders correctly with children', () => {
    const {container} = renderComponent({
      children: (
        <input
          type="email"
          placeholder="Email"
        />
      ),
    });

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('should render the submit button correctly and call onSubmit when clicked', () => {
    renderComponent();
    const submitButton = screen.getByRole('button', {
      name: 'Submit',
    });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');

    fireEvent.click(submitButton);
    expect(baseProps.onSubmit).toHaveBeenCalledTimes(1);
  });

  test('should disable the submit button when isLoading = true', () => {
    renderComponent({isLoading: true});
    const submitButton = screen.getByRole('button', {
      name: 'Submit',
    });
    expect(submitButton).toBeDisabled();
  });

  test('should render text and link if text and linkConfig are provided', () => {
    const linkConfig = {to: '/register', label: 'Register'};
    const text = "Don't have an account?";
    renderComponent({linkConfig, text});
    expect(screen.getByText(text)).toBeInTheDocument();
    const link = screen.getByRole('link', {name: 'Register'});
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/register');
  });

  resetFormOptions.forEach((isResetForm) => {
    const expectation = isResetForm ? 'NOT render' : 'render';

    test(`should ${expectation} Google auth when isResetForm = ${String(isResetForm)}`, () => {
      renderComponent({isResetForm: isResetForm});

      if (isResetForm) {
        expect(screen.queryByText('or')).not.toBeInTheDocument();
        expect(screen.queryByRole('button', {name: 'Authorize with Google'})).not.toBeInTheDocument();
      } else {
        expect(screen.getByText('or')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Authorize with Google'})).toBeInTheDocument();
      }
    });
  });
});
