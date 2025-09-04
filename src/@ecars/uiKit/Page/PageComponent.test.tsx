import {PAGE_CONTAINER_SIZE} from '@ecars/uiKit/Page/constants';
import {Page} from '@ecars/uiKit/Page/index';
import {render} from '@testing-library/react';

describe('Page Component', () => {
  const containerSizes = Object.values(PAGE_CONTAINER_SIZE);
  containerSizes.forEach((size) => {
    test('render component', () => {
      const {container} = render(
        <Page
          containerSize={size}
          block="test"
        >
          1
        </Page>,
      );
      expect(container).toMatchSnapshot();
      const containerElement = container.querySelector('.container');
      expect(container).toBeInTheDocument();
      expect(containerElement).toHaveClass(`container--${size}`);
    });
  });
});
