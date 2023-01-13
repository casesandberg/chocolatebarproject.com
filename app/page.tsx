import { fetchMostRecentBar } from '#/lib/getBars'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Container } from '../components/Container'

export default async function Page() {
  const mostRecentBar = await fetchMostRecentBar()

  return (
    <Container className="relative h-[90vh]">
      {mostRecentBar ? (
        <Link href={`/bars/${mostRecentBar.slug}`}>
          <Image
            priority
            src={mostRecentBar.images.HERO.src}
            alt={mostRecentBar.images.HERO.alt}
            fill
            className="object-cover object-center"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer bg-primary-800 p-2">
            <h1 className="text-primary-50">
              <Balancer>{mostRecentBar.name}</Balancer>
            </h1>

            {mostRecentBar.subtitle ? (
              <p role="doc-subtitle" className="text-primary-50/50">
                <Balancer>{mostRecentBar.subtitle}</Balancer>
              </p>
            ) : null}
          </div>
        </Link>
      ) : null}
    </Container>
  )
}
