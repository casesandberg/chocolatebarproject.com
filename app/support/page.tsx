import { Container } from '#/components/Container'
import {
  AtSymbolIcon,
  CreditCardIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

export default async function SupportPage() {
  return (
    <Container className="my-2">
      <div className="my-10 grid grid-cols-1 gap-0 sm:grid-cols-3 sm:gap-8">
        <h1 className="py-2 text-center font-heading text-4xl font-bold text-primary-800 sm:text-right">
          Support
        </h1>
        <p className="col-span-2 text-primary-900/50">
          We are on a mission to catalog the world{`'`}s chocolate and showcase
          the diversity and richness of chocolate from around the globe. But we
          can{`'`}t do it alone! There are a few ways you can help us in our
          journey of discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2">
          <CreditCardIcon className="h-10 w-10 text-primary-100" />
          <p className="text-center font-heading text-7xl font-bold text-primary-800/50">
            1.
          </p>
          <p className="text-justify text-primary-900">
            Help us purchase a chocolate bar each month. Get access to
            behind-the-scenes content and early access to new chocolate bars
            before they{`'`}re featured.
          </p>
          <a
            target="_blank"
            href="https://www.patreon.com/chocolate"
            className="inline-block bg-[#ff424d] p-0.5 text-primary-50 hover:opacity-80"
            rel="noreferrer"
          >
            Support on Patreon
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AtSymbolIcon className="h-10 w-10 text-primary-100" />
          <p className="text-center font-heading text-7xl font-bold text-primary-800/50">
            2.
          </p>
          <p className="text-justify text-primary-900">
            If you have a favorite chocolate bar that you think we should know
            about, let us know! We would love to feature it in our project and
            share it with our audience.
          </p>
          <a
            target="_blank"
            href="mailto:case@casesandberg.com"
            className="inline-block bg-primary-100/50 p-0.5 text-primary-900 hover:opacity-80"
            rel="noreferrer"
          >
            case@casesandberg.com
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <EnvelopeIcon className="h-10 w-10 text-primary-100" />
          <p className="text-center font-heading text-7xl font-bold text-primary-800/50">
            3.
          </p>
          <p className="text-justify text-primary-900">
            If you{`'`}re a chocolate company and would like to send us your bar
            to feature, we would be more than happy to do so. We feature at most
            one bar per company per month.
          </p>
          <div className="inline-block bg-primary-100/50 p-0.5 text-primary-900">
            <div>case sandberg</div>
            <div>1642 University Ave</div>
            <div>San Diego, CA 94110</div>
          </div>
        </div>
      </div>
    </Container>
  )
}
