import { Container } from '#/components/Container'
import { getData } from '#/lib/db'
import { notFound } from 'next/navigation'
import { BarTable } from './components/BarTable'

export default async function AdminPage() {
  const { bars } = await getData()

  if (process.env.NODE_ENV !== 'development') {
    return notFound()
  }

  return (
    <Container className="relative h-[40vh] sm:h-[80vh]">
      <h1 className="my-4 text-xl font-bold uppercase text-primary-900/50">
        Admin Page
      </h1>
      <BarTable bars={bars} />
    </Container>
  )
}
