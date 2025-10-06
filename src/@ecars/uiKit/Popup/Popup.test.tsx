import {act, fireEvent, render, renderHook, screen} from '@testing-library/react';
import {bodyOverflow} from '@ecars/services/helpers/helpers';
import {usePopup} from '@ecars/services/hooks/usePopup';
import {Popup} from '@ecars/uiKit/Popup/index';
import * as hooks from 'ecars-web-lib';

const isOpenTestCases = [true, false];
const onClose = vi.fn();
const useClickOutsideSpy = vi.spyOn(hooks, 'useClickOutside');
describe('Popup Component', () => {
  isOpenTestCases.forEach((isOpen) => {
    test(`Popup is ${isOpen ? 'open' : 'closed'}`, () => {
      render(
        <Popup
          isOpen={isOpen}
          onClose={onClose}
        >
          1
        </Popup>,
      );
      const popupElement = document.querySelector('.popup');
      if (isOpen) {
        expect(popupElement).toHaveClass('open');
      } else {
        expect(popupElement).not.toHaveClass('open');
      }
      expect(popupElement).toMatchSnapshot();
      expect(popupElement).toBeInTheDocument();
    });
  });
  test('calls onClose when close button is clicked', () => {
    render(
      <Popup
        isOpen
        onClose={onClose}
      >
        1
      </Popup>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('passes onClose to useClickOutside', () => {
    render(
      <Popup
        isOpen
        onClose={onClose}
      >
        1
      </Popup>,
    );
    expect(useClickOutsideSpy).toHaveBeenCalledWith(onClose);
  });
});

vi.mock('@ecars/services/helpers/helpers', () => ({
  bodyOverflow: vi.fn(),
}));

interface TestCase {
  name: string;
  description: string;
  fn: (hook: ReturnType<typeof usePopup>) => void;
  expected: boolean;
  preOpen?: boolean;
}

const testCases: TestCase[] = [
  {
    name: 'handleOpen',
    description: 'opens the popup',
    fn: (hook) => {
      hook.handleOpen();
    },
    expected: true,
  },
  {
    name: 'handleClose',
    description: 'closes the popup',
    preOpen: true,
    fn: (hook) => {
      hook.handleClose();
    },
    expected: false,
  },
  {
    name: 'handleToggleOpen (open)',
    description: 'toggles popup to open',
    fn: (hook) => {
      hook.handleToggleOpen();
    },
    expected: true,
  },
  {
    name: 'handleToggleOpen (close)',
    description: 'toggles popup to close',
    preOpen: true,
    fn: (hook) => {
      hook.handleToggleOpen();
    },
    expected: false,
  },
];

describe('usePopup hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('initial state should be closed', () => {
    const {result} = renderHook(() => usePopup());
    expect(result.current.isOpen).toBe(false);
  });

  test('handleOpen should open popup', () => {
    const {result} = renderHook(() => usePopup());

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.isOpen).toBe(true);
    expect(bodyOverflow).toHaveBeenCalledWith(true);
  });
  testCases.forEach(({description, fn, preOpen, expected}) => {
    test(description, () => {
      const {result} = renderHook(() => usePopup());

      if (preOpen) {
        act(() => {
          result.current.handleOpen();
        });
      }

      act(() => {
        fn(result.current);
      });

      expect(result.current.isOpen).toBe(expected);
      expect(bodyOverflow).toHaveBeenCalledWith(expected);
    });
  });
  test('should close when pressing Escape', () => {
    const {result} = renderHook(() => usePopup());

    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      const event = new KeyboardEvent('keydown', {key: 'Escape'});
      document.dispatchEvent(event);
    });

    expect(result.current.isOpen).toBe(false);
  });
});
