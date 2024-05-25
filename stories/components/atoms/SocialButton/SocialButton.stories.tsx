import SocialButton from '@atoms/SocialButton'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SocialButton> = {
    title: 'Atoms/Social Button',
    component: SocialButton,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SocialButton>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        boxProps: {
            sx: {
                backgroundColor: 'primary.main',
            }
        }
    }
}

export const Primary: Story = {
    args: {
        variant: 'primary',
        icon: 'facebook',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        icon: 'facebook',
    },
}

/**
 * Navigate to a specific url - Right click is available to open in a new tab
 * */
export const WithUrl: Story = {
    args: {
        href: 'https://google.com',
    },
}
