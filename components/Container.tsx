import React from 'react'

export function Container({
  children,
  className,
  as: As = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: keyof React.ReactHTML
}) {
  return (
    <As className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${className || ''}`}>
      {children}
    </As>
  )
}
