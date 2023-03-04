import React from 'react'

export function Container({
  children,
  className,
  bg,
  as: As = 'div',
}: {
  children: React.ReactNode
  className?: string
  bg?: string
  as?: keyof React.ReactHTML
}) {
  return (
    <div className={bg}>
      <As
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${className || ''}`}
      >
        {children}
      </As>
    </div>
  )
}
