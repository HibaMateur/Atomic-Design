import { Meta, StoryObj } from '@storybook/react'

import Typography from '@atoms/Typography'


const meta: Meta<typeof Typography> = {
    title: 'Atoms/Typography',
    component: Typography,
    args: {
        children: 'Hello World',
        variant: 'h1',
    },
    argTypes: {
        t: {
            options: ['app.description', 'app.title'],
            control: {
                type: 'select',
            },
        }
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Typography>


export const translate: Story = {
    args: {
        t: 'app.description',
    },
}

export const ChildrenBefore: Story = {
    args: {
        t: 'app.description',
        childrenPosition: 'before',
        children: 'Hello World',
    },
}
export const ChildrenAfter: Story = {
    args: {
        t: 'app.description',
        childrenPosition: 'after',
        children: 'Hello World',
    },
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const h1: Story = {
    args: {
        variant: 'h1',
    },
}

export const h2: Story = {
    args: {
        variant: 'h2',
    },
}

export const h3: Story = {
    args: {
        variant: 'h3',
    },
}

export const h4: Story = {
    args: {
        variant: 'h4',
    },
}

export const h5: Story = {
    args: {
        variant: 'h5',
    },
}

export const h6: Story = {
    args: {
        variant: 'h6',
    },
}

export const subtitle1: Story = {
    args: {
        variant: 'subtitle1',
    },
}

export const subtitle2: Story = {
    args: {
        variant: 'subtitle2',
    },
}

export const body1: Story = {
    args: {
        variant: 'body1',
    },
}

export const body2: Story = {
    args: {
        variant: 'body2',
    },
}

export const button: Story = {
    args: {
        variant: 'button',
    },
}

export const overline: Story = {
    args: {
        variant: 'overline',
    },
}

export const caption: Story = {
    args: {
        variant: 'caption',
    },
}