import {
  fetchMostRecentBar,
  fetchNMostRecentBars,
  START_OF_DAY_PST,
} from '#/lib/getBars'
import Image from 'next/image'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { Container } from '../components/Container'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { customAlphabet } from 'nanoid'

// Generate Random ID
const nanoid = customAlphabet('1234567890abcdef', 10)
console.log(nanoid())

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
  const fiveRecent = await fetchNMostRecentBars()

  return (
    <>
      <Container className="relative min-h-[700px] pb-4 sm:h-px">
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
                      <h2 className="font-bold text-primary-900">
                        {mostRecentBar.name}
                      </h2>
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

      <Container bg="bg-primary-700">
        <div className="flex flex-col gap-6 py-10">
          <section className="grid gap-2">
            <h3 className="text-center font-heading text-4xl font-bold text-primary-50 sm:text-left sm:text-4xl">
              <Balancer>One bar at a time</Balancer>
            </h3>
            <p
              role="doc-subtitle"
              className="text-center font-heading text-lg text-primary-50/50 sm:text-left"
            >
              <Balancer>
                A daily journey through the delicious world of chocolate.
              </Balancer>
            </p>
          </section>

          <div className="flex flex-col gap-1 sm:gap-0">
            {fiveRecent.map((bar) => (
              <Link key={bar.id} href={`/bars/${bar.slug}`}>
                <div className="grid grid-cols-1 gap-0 py-0.5 transition-colors hover:bg-primary-600 sm:grid-cols-8 sm:gap-1">
                  <div>
                    <div className="inline truncate bg-primary-50 px-0.25 text-sm">
                      {new Date(
                        bar.releaseDate + START_OF_DAY_PST
                      ).toLocaleDateString('en-US')}
                    </div>
                  </div>
                  <div className="col-span-4 truncate font-semibold text-primary-50/50">
                    <span className="text-primary-50">{bar.name}</span>{' '}
                    <span className="text-primary-50/50">{bar.subtitle}</span>
                  </div>
                  <div className="col-span-2 truncate text-primary-50/50">
                    {bar.maker}
                  </div>
                  <div className="flex flex-row items-center justify-between text-primary-50/50">
                    <span className="truncate">{bar.productionCountry}</span>

                    <ChevronRightIcon className="h-2.5 w-2.5 shrink-0" />
                  </div>
                </div>
              </Link>
            ))}

            <div className="flex flex-row justify-end pt-3">
              <Link href="/bars">
                <div className="inline-flex items-center truncate bg-primary-50 px-0.25 pl-1">
                  <span>View All</span>
                  <ChevronRightIcon className="h-2.5 w-2.5 shrink-0" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
