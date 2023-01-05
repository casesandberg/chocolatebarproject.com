import { AnalyticsWrapper } from '#/components/Analytics'
import { PageFrame } from '#/components/PageFrame'
import '#/styles/globals.css'
import { Inter, Roboto_Mono } from '@next/font/google'
import PlausibleProvider from 'next-plausible'
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

        <AnalyticsWrapper />
      </body>
    </html>
  )
}
