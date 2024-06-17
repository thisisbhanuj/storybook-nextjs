import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { 
    onClick: fn() 
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: "select",
      options: ["default", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    className: 'shadow-sm',
    disabled: false,
    children: 'Default'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    className: 'shadow-lg',
    disabled: false,
    children: 'Secondary',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    className: 'shadow-sm',
    disabled: true,
    children: 'Disabled',
  },
};
