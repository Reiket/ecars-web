import {SECTION_CONTAINER_SIZE} from '@ecars/uiKit/Section/constants';
import {Section} from '@ecars/uiKit/Section/index';
import {render} from '@testing-library/react';

describe('Section Component', () => {
  const containerSizes = Object.values(SECTION_CONTAINER_SIZE);
  containerSizes.forEach((size) => {
    test('render component correctly', () => {
      const {container} = render(
        <Section
          containerSize={size}
          block="test"
        >
          1
        </Section>,
      );
      expect(container).toMatchSnapshot();
      const containerElement = container.querySelector('.container');
      expect(container).toBeInTheDocument();
      expect(containerElement).toHaveClass(`container--${size}`);
    });
  });
});
