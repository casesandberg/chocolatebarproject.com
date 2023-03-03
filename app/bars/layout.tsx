import type { Metadata } from 'next'

export default function BarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

export const metadata: Metadata = {
  title: 'All Bars | The Chocolate Bar Project',
  description: 'A daily journey through the delicious world of chocolate.',
}
