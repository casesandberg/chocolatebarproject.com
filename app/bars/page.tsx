import { BarGrid } from '#/components/BarGrid'
import { Container } from '#/components/Container'
import { fetchBars } from '#/lib/getBars'

export default async function BarsPage() {
  const bars = await fetchBars()

  return (
    <Container className="my-2">
      <BarGrid title="Bars" hideTitle data={bars} />
    </Container>
  )
}
