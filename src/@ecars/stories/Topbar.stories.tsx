import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Topbar} from '@ecars/uiKit/Topbar';

type StoryProps = ComponentProps<typeof Topbar>;

const meta: Meta<StoryProps> = {
  component: Topbar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => {
    return <Topbar />;
  },
};
