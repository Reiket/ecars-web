import {render, screen} from '@testing-library/react';
import {socialLinks} from '@ecars/uiKit/SocialList/constants';
import {SocialList} from '@ecars/uiKit/SocialList/SocialList';

describe('SocialList Component', () => {
  test('render component correctly with right items', () => {
    const {container} = render(
      <SocialList
        color="dark"
        items={socialLinks}
      />,
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(socialLinks.length);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
