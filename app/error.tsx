'use client'

import { Boundary } from '#/components/Boundary'
import React from 'react'

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error)
  }, [error])

  return (
    <Boundary labels={['Home page Error UI']} color="pink">
      <div className="space-y-4">
        <div className="text-vercel-pink text-sm">
          <strong className="font-bold">Error:</strong> {error?.message}
        </div>
        <div>
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </div>
    </Boundary>
  )
}
