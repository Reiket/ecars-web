import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {MemoryRouter} from 'react-router';
import {Footer} from '@ecars/uiKit/Footer';

type StoryProps = ComponentProps<typeof Footer>;

const meta: Meta<StoryProps> = {
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => (
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  ),
};
