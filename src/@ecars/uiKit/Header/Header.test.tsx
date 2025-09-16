import {Header, Navbar} from '@ecars/uiKit/Header';
import {act, fireEvent, render, renderHook} from '@testing-library/react';

import {MemoryRouter} from 'react-router';
import {useBurger} from '@ecars/services/hooks/useBurger';

const toggleBurgerMock = vi.fn();

describe('Header Component', () => {
  test('render component correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('clicking burger toggles active class', () => {
    const toggleBurgerMock = vi.fn();
    const {container} = render(
      <MemoryRouter>
        <Header.Burger
          onClick={toggleBurgerMock}
          isBurger
        />
        <Navbar isBurgerActive />
      </MemoryRouter>,
    );
    const burger = container.querySelector('.burger');
    const navbar = container.querySelector('.navbar');
    if (burger) {
      fireEvent.click(burger);
    }
    expect(burger).toHaveClass('_active');
    expect(navbar).toHaveClass('_open-burger');
    expect(toggleBurgerMock).toHaveBeenCalledTimes(1);
  });
  test('renders and toggles burger hook', () => {
    const {container} = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const burger = container.querySelector('.burger');
    if (burger) {
      fireEvent.click(burger);
    }
    expect(toggleBurgerMock).toHaveBeenCalledTimes(1);
  });
});

describe('useBurger hook', () => {
  test('returns the initial state as false by default', () => {
    const {result} = renderHook(() => useBurger());

    expect(result.current.isBurgerActive).toBe(false);
  });

  test('accepts a custom initial state', () => {
    const {result} = renderHook(() => useBurger(true));

    expect(result.current.isBurgerActive).toBe(true);
  });

  test('toggleBurger changes state and calls bodyOverflow', async () => {
    const {result} = renderHook(() => useBurger());
    const {bodyOverflow} = await import('@ecars/services/helpers/helpers');

    expect(result.current.isBurgerActive).toBe(false);

    act(() => {
      result.current.toggleBurger();
    });

    expect(result.current.isBurgerActive).toBe(true);
    expect(bodyOverflow).toHaveBeenCalledWith(true);

    act(() => {
      result.current.toggleBurger();
    });

    expect(result.current.isBurgerActive).toBe(false);
    expect(bodyOverflow).toHaveBeenCalledWith(false);
  });
});
