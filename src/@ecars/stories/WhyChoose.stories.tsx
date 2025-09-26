import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {WhyChoose} from '@ecars/uiKit/WhyChoose';

type StoryProps = ComponentProps<typeof WhyChoose>;

const meta: Meta<StoryProps> = {
  component: WhyChoose,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <WhyChoose />,
};
