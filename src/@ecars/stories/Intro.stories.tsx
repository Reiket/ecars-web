import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Intro} from '@ecars/uiKit/Intro';

type StoryProps = ComponentProps<typeof Intro>;

const meta: Meta<StoryProps> = {
  component: Intro,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <Intro />,
};
