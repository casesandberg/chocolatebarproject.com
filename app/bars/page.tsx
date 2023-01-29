import { Container } from '#/components/Container'
import { Search } from '#/components/Search'

export default async function BarsPage() {
  // const bars = await fetchBars()

  return (
    <Container className="my-2">
      <Search />

      {/* <BarGrid title="Bars" hideTitle data={bars} /> */}
    </Container>
  )
}
