import { BarGrid } from '#/components/BarGrid'
import { Container } from '#/components/Container'
import { Search } from '#/components/Search'
import { fetchBars } from '#/lib/getBars'
import { algoliasearch } from 'algoliasearch'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY!
)

export default async function BarsPage() {
  const bars = await fetchBars()

  const settings = await searchClient.getSettings({ indexName: 'bars' })
  const request = await searchClient.search({
    requests: [
      {
        indexName: 'bars',
        query: '',
        facets: ['*'],
      },
    ],
  })

  const [request1] = request.results

  console.log(settings)
  // console.log(request1.hits)
  // console.log(request1.facets)
  // console.log(request1.facets_stats)

  return (
    <Container className="my-2">
      <Search />

      <BarGrid title="Bars" hideTitle data={bars} />
    </Container>
  )
}
