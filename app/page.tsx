import { fetchMostRecentBar } from '#/lib/getBars'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../components/Container'

export default async function Page() {
  const mostRecentBar = await fetchMostRecentBar()

  return (
    <Container className="relative h-[90vh]">
      <Link href={`/bars/${mostRecentBar.slug}`}>
        <Image
          priority
          src={mostRecentBar.images.HERO.src}
          alt={mostRecentBar.images.HERO.alt}
          fill
          className="object-cover object-center"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-brown-600 p-4 text-white">
          {mostRecentBar.name}
        </div>
      </Link>
    </Container>
  )
}
