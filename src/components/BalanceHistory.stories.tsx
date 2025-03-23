import type { Meta, StoryObj } from '@storybook/react'
import RecentTransactions from './RecentTransactions'

const meta = {
  title: 'UI/RecentTransactions',
  component: RecentTransactions,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof RecentTransactions>

export default meta

type Story = StoryObj<typeof RecentTransactions>

export const Default = {
  args: {
    amount: 1222,
    date: '12/23',
    message: 'Deposited from Unknown',
    transaction: true
  }
} satisfies Story
