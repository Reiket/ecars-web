import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Works} from '@ecars/uiKit/Works';

type StoryProps = ComponentProps<typeof Works>;

const meta: Meta<StoryProps> = {
  component: Works,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <Works />,
};
