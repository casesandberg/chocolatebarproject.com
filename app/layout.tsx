import { AnalyticsWrapper } from '#/components/Analytics'
import { PageFrame } from '#/components/PageFrame'
import '#/styles/globals.css'
import { Inter, Montserrat, Roboto_Mono } from '@next/font/google'
import type { Metadata } from 'next'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

// Bust cache every 4 hours
export const revalidate = 60 * 60 * 4

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      prefix="og: https://ogp.me/ns#"
      className={`${robotoMono.variable} ${inter.variable} ${montserrat.variable} bg-primary-50 font-body`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />

        <main className="overflow-hidden">
          <PageFrame>{children}</PageFrame>
        </main>

        <Footer />

        <AnalyticsWrapper />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1',
  title: 'The Chocolate Bar Project | Cataloging the Worlds Chocolate',
  description:
    'Exploring and documenting the diversity of chocolate from every corner of the globe.',
}
