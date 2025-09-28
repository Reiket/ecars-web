import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Send} from '@ecars/uiKit/Send';

type StoryProps = ComponentProps<typeof Send>;

const meta: Meta<StoryProps> = {
  component: Send,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <Send />,
};
