import { cache } from 'react'
import bars, { Bar } from './data/bars'
import { generateSlug } from './helpers'

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

export const getBars = cache((): Array<Bar> => bars)

export async function fetchBarBySlug(slug: string | undefined) {
  return getBars().find((bar) => generateSlug(bar) === slug)
}

export async function fetchBarById(id: string | undefined) {
  return getBars().find((bar) => bar.id === id)
}

export async function fetchMostRecentBar() {
  // TODO: Fetch by publication date?
  return getBars()[0]
}

export async function fetchBars(): Promise<Array<Bar>> {
  return getBars()
}
