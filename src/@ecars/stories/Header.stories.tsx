import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Header} from '@ecars/uiKit/Header';
import {MemoryRouter} from 'react-router';

type StoryProps = ComponentProps<typeof Header>;

const meta: Meta<StoryProps> = {
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  },
};
