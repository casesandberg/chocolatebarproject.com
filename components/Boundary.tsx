import React from 'react'

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode
  animateRerendering?: boolean
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
}) => {
  return (
    <div className={'rounded-full px-1.5 shadow-[0_0_1px_3px_black]'}>
      {children}
    </div>
  )
}
export const Boundary = ({
  children,
  labels = ['children'],
  size = 'default',
  color = 'default',
  animateRerendering = true,
}: {
  children: React.ReactNode
  labels?: string[]
  size?: 'small' | 'default'
  color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
  animateRerendering?: boolean
}) => {
  return (
    <div className={'relative rounded-lg border border-dashed'}>
      <div
        className={
          'absolute -top-2.5 flex space-x-1 text-[9px] uppercase leading-4 tracking-widest'
        }
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          )
        })}
      </div>

      {children}
    </div>
  )
}
