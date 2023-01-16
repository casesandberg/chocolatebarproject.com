// Fixes error with Facebook not respecting dynamic meta tags
// https://github.com/vercel/next.js/issues/44470#issuecomment-1370202144

import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  if (request.headers.has('Range')) {
    const headers = new Headers(request.headers)
    headers.delete('Range')
    const responseWithoutRange = NextResponse.next({ request: { headers } })
    return responseWithoutRange
  }
}
