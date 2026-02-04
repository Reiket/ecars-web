import {render} from '@testing-library/react';
import {HomePage} from '@ecars/pages/HomePage/index';
import {beforeEach, vi} from 'vitest';
import {useBlog} from '@ecars/core/hooks/useBlog';
import {MemoryRouter} from 'react-router-dom';

vi.mock('@ecars/core/hooks/useBlog', () => ({
  useBlog: vi.fn(),
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    vi.mocked(useBlog).mockReturnValue({
      isLoading: true,
      data: undefined,
    });
  });
  test('render component correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
