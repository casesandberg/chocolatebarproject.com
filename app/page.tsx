import { fetchMostRecentBar, START_OF_DAY_PST } from '#/lib/getBars'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Container } from '../components/Container'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

const isToday = (someDate: Date) => {
  const now = new Date()
  return (
    someDate.getDate() == now.getDate() &&
    someDate.getMonth() == now.getMonth() &&
    someDate.getFullYear() == now.getFullYear()
  )
}

export default async function Page() {
  const mostRecentBar = await fetchMostRecentBar()

  return (
    <Container className="relative  h-px min-h-[700px]">
      <div className="grid h-full grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-2">
        <section className="grid gap-2 py-4">
          <h1 className="text-center font-heading text-5xl font-bold text-primary-800 sm:text-left sm:text-7xl">
            <Balancer>Cataloging the world{`'`}s chocolate</Balancer>
          </h1>
          <p
            role="doc-subtitle"
            className="text-center font-heading text-lg text-primary-900/50 sm:text-left"
          >
            <Balancer>
              Exploring and documenting the diversity of chocolate from every
              corner of the globe.
            </Balancer>
          </p>
        </section>

        <div className="relative">
          {mostRecentBar ? (
            <Link href={`/bars/${mostRecentBar.slug}`}>
              <div className="grid gap-1">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-800 p-0.5 text-sm text-primary-50">
                    {isToday(
                      new Date(mostRecentBar.releaseDate + START_OF_DAY_PST)
                    )
                      ? 'NEW TODAY'
                      : new Date(
                          mostRecentBar.releaseDate + START_OF_DAY_PST
                        ).toLocaleDateString('en-US')}
                  </span>
                  <div className="text-right text-primary-900/50">
                    {mostRecentBar.productionCountry}
                  </div>
                </div>
                <Image
                  priority
                  src={mostRecentBar.images.HERO.src}
                  alt={mostRecentBar.images.HERO.alt}
                  width={600}
                  height={450}
                  className="bg-primary-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-primary-900">
                      {mostRecentBar.name}
                    </h1>
                    <ChevronRightIcon className="h-2.5 w-2.5" />
                  </div>

                  <p role="doc-subtitle" className="text-primary-900/50">
                    {mostRecentBar.maker}
                  </p>
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </Container>
  )
}
