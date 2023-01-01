import { cache } from 'react'
import origins, { Origin } from './data/origins'

export const getOrigins = cache((): Array<Origin> => origins)

export async function fetchOriginByProducer(producer: string | undefined) {
  return getOrigins().find((origin) => origin.producer === producer)
}

export async function fetchMakers(): Promise<Array<Origin>> {
  return getOrigins()
}
