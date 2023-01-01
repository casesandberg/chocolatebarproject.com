import { cache } from 'react'
import makers, { Maker } from './data/makers'

export const getMakers = cache((): Array<Maker> => makers)

export async function fetchMakerByName(name: string | undefined) {
  return getMakers().find((maker) => maker.name === name)
}

export async function fetchMakers(): Promise<Array<Maker>> {
  return getMakers()
}
