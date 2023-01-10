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

export const getBars = cache(
  (): Array<Bar> =>
    bars.filter(
      ({ releaseDate }) => new Date(releaseDate + ' 00:00:01') <= new Date()
    )
)

export async function fetchBarBySlug(slug: string | undefined) {
  return getBars().find((bar) => bar.slug === slug)
}

export async function fetchBarById(id: string | undefined) {
  return getBars().find((bar) => bar.id === id)
}

export async function fetchMostRecentBar() {
  const bars = getBars()
  const today = new Date()

  const closestBar = _.minBy(
    bars,
    (bar) => today.getTime() - new Date(bar.releaseDate + ' 00:00:01').getTime()
  )

  return closestBar
}

export async function fetchBars(): Promise<Array<Bar>> {
  return getBars()
}
