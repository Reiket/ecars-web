import type {ComponentProps} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {BlogCard} from '@ecars/uiKit/BlogCard';
import {BLOG_CARD_DIRECTION} from '@ecars/uiKit/BlogCard/constants';
import {blogCardImageMock} from '@ecars/services/__mocks__/mocks';
import {CATEGORIES_LIST} from 'ecars-web-lib';

type StoryProps = ComponentProps<typeof BlogCard>;

const meta: Meta<StoryProps> = {
  component: BlogCard,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: Object.values(BLOG_CARD_DIRECTION),
      control: {
        type: 'select',
      },
    },
    category: {
      options: Object.values(CATEGORIES_LIST),
      control: {
        type: 'select',
      },
    },
  },
  args: {
    category: CATEGORIES_LIST.GUIDES,
    imageUrl: blogCardImageMock,
    title: 'Blog Card',
    description: 'Blog Card',
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  render: ({...args}) => {
    return <BlogCard {...args} />;
  },
};
