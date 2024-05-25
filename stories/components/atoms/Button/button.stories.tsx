import type { Meta, StoryObj } from '@storybook/react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import Button from '@atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained'
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
};

export const Rounded: Story = {
  args: {
    ...Primary.args,
    color: 'primary',
    rounded: true,
  },
};

export const Large: Story = {
  args: {
      ...Primary.args,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
      ...Primary.args,
    size: 'small',
  },
};

export const Disabled: Story = {
    args: {
        ...Primary.args,
        disabled: true
    },
};

export const Loading: Story = {
    args: {
        ...Primary.args,
        loading: true
    },
};

export const Success: Story = {
    args: {
        ...Primary.args,
        color: 'success'
    },
};

export const Warning: Story = {
    args: {
        ...Primary.args,
        color: 'warning'
    },
};

export const Error: Story = {
    args: {
        ...Primary.args,
        color: 'error'
    },
};

export const Upload: Story = {
    args: {
        ...Primary.args,
        upload: true
    },
}

export const Iconed: Story = {
    args: {
        ...Primary.args,
        endIcon: <CloudUploadIcon />
    },
}