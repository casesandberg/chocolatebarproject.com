import { Inter, Roboto_Mono } from '@next/font/google'

import '../styles/globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${robotoMono.variable} font-mono ${inter.variable} font-sans`}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
