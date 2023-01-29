import { Container } from '#/components/Container'
import { Search } from '#/components/Search'
import { algoliasearch } from 'algoliasearch'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY!
)

export default async function BarsPage() {
  // const bars = await fetchBars()

  const request = await searchClient.search({
    requests: [
      {
        indexName: 'bars',
        query: '',
        facets: ['*'],
      },
    ],
  })

  const [emptySearch] = request.results

  return (
    <Container className="my-2">
      <Search initialState={emptySearch} />

      {/* <BarGrid title="Bars" hideTitle data={bars} /> */}
    </Container>
  )
}
