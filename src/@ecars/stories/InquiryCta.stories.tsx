import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {InquiryCTA} from '@ecars/uiKit/InquiryCTA';

type StoryProps = ComponentProps<typeof InquiryCTA>;

const meta: Meta<StoryProps> = {
  component: InquiryCTA,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => <InquiryCTA />,
};
