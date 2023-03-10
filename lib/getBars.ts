import _ from 'lodash'
import { cache } from 'react'
import bars, { Bar } from './data/bars'

export type PageProps = {
  params?: any
  children?: React.ReactNode
}
export type Category = {
  name: string
  slug: string
  count: number
  items: Omit<Category, 'items'>[]
}

export const START_OF_DAY_PST = 'T00:00:01-0800'

export const getBars = cache(
  (): Array<Bar> =>
    bars.filter(
      ({ releaseDate }) =>
        new Date(releaseDate + START_OF_DAY_PST) <= new Date()
    )
)

// Dont filter out by released.
export async function fetchBarBySlug(slug: string | undefined) {
  return bars.find((bar) => bar.slug === slug)
}

export async function fetchBarById(id: string | undefined) {
  return getBars().find((bar) => bar.id === id)
}

export async function fetchMostRecentBar() {
  const bars = getBars()
  const today = new Date()

  const closestBar = _.minBy(
    bars,
    (bar) =>
      today.getTime() - new Date(bar.releaseDate + START_OF_DAY_PST).getTime()
  )

  return closestBar
}

export async function fetchNMostRecentBars(count = 5) {
  const bars = getBars()
  const today = new Date()

  return _(getBars())
    .orderBy(({ releaseDate }) => releaseDate, ['desc'])
    .take(count)
    .value()
}

export async function fetchBars(): Promise<Array<Bar>> {
  return getBars()
}
