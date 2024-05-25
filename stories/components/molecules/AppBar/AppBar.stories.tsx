import AppBar from '@molecules/AppBar'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
 const meta: Meta<typeof AppBar> = {
 title: "Molecules/AppBar",
 component: AppBar,
 tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof AppBar>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {}
