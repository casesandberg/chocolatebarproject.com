import { PageFrame } from '#/components/PageFrame'
import '#/styles/globals.css'
import PlausibleProvider from 'next-plausible'

import { Inter, Roboto_Mono } from '@next/font/google'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

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
      <head>
        <PlausibleProvider domain="chocolatebarproject.com" />
      </head>
      <body>
        <div className="bg-background">
          <Header />

          <main className="overflow-hidden">
            <PageFrame>{children}</PageFrame>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
