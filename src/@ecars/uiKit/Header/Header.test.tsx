import {Header, Navbar} from '@ecars/uiKit/Header';
import {act, fireEvent, render, renderHook} from '@testing-library/react';

import {MemoryRouter} from 'react-router-dom';
import {useBurger} from '@ecars/services/hooks/useBurger';
import {useHeaderScroll} from '@ecars/services/hooks/useHeaderScroll';

const scenarios = [
  {
    desc: 'initial state',
    scrolls: [0],
    expected: {sticky: false, showHeader: true},
  },
  {
    desc: 'scrolled down below topbarHeight → sticky true, showHeader false',
    scrolls: [100],
    expected: {sticky: true, showHeader: false},
  },
  {
    desc: 'scroll up again → sticky true, showHeader true',
    scrolls: [150, 50],
    expected: {sticky: true, showHeader: true},
  },
];

vi.mock('@ecars/services/helpers/helpers', () => ({
  bodyOverflow: vi.fn(),
}));

vi.mock('@ecars/services/hooks/useBurger', () => ({
  useBurger: () => ({
    isBurgerActive: false,
    toggleBurger: toggleBurgerMock,
  }),
}));

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
  scenarios.forEach((scenario) => {
    const {desc, scrolls, expected} = scenario;
    test(desc, () => {
      const {container} = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const header = container.querySelector('header');

      act(() => {
        scrolls.forEach((y) => {
          window.scrollTo(0, y);
          window.dispatchEvent(new Event('scroll'));
        });
      });

      if (expected.sticky) {
        expect(header).toHaveClass('sticky');
      } else {
        expect(header).not.toHaveClass('sticky');
      }

      if (expected.showHeader) {
        expect(header).toHaveClass('show-header');
      } else {
        expect(header).not.toHaveClass('show-header');
      }
    });
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

describe('useHeaderScroll', () => {
  beforeEach(() => {
    window.scrollTo(0, 0);
  });

  test('should return initial state', () => {
    const {result} = renderHook(() => useHeaderScroll());
    expect(result.current.isSticky).toBe(false);
    expect(result.current.showHeader).toBe(true);
  });

  test('should set isSticky to true when scrolled below topbarHeight', () => {
    const {result} = renderHook(() => useHeaderScroll());

    act(() => {
      window.scrollTo(0, 100);
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.isSticky).toBe(true);
  });

  test('should hide header when scrolling down', () => {
    const {result} = renderHook(() => useHeaderScroll());

    act(() => {
      window.scrollTo(0, 10);
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.showHeader).toBe(false);
  });

  test('should show header when scrolling up', () => {
    const {result} = renderHook(() => useHeaderScroll());

    act(() => {
      window.scrollTo(0, 100);
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.showHeader).toBe(false);

    act(() => {
      window.scrollTo(0, 50);
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current.showHeader).toBe(true);
  });
});
