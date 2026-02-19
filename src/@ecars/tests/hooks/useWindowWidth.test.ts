import {renderHook, act} from '@testing-library/react';
import {useWindowWidth} from '@ecars/services/hooks/useWindowWidth';

describe('useWindowWidth hook', () => {
  const THRESHOLD = 768;

  test.each([
    {width: 1024, expected: false, label: 'above'},
    {width: 500, expected: true, label: 'below'},
  ])('returns $expected when width is $label threshold', ({width, expected}) => {
    setWindowWidth(width);
    const {result} = renderHook(() => useWindowWidth(THRESHOLD));
    expect(result.current).toBe(expected);
  });

  test('updates state on window resize and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    setWindowWidth(1024);

    const {result, unmount} = renderHook(() => useWindowWidth(THRESHOLD));

    act(() => {
      setWindowWidth(500);
    });
    expect(result.current).toBe(true);

    act(() => {
      setWindowWidth(1200);
    });
    expect(result.current).toBe(false);

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  test('reacts to threshold change', () => {
    setWindowWidth(800);
    const {result, rerender} = renderHook(({t}) => useWindowWidth(t), {initialProps: {t: 768}});

    expect(result.current).toBe(false);

    rerender({t: 900});
    expect(result.current).toBe(true);
  });
});
