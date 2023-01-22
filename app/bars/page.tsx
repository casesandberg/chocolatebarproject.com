import { BarGrid } from '#/components/BarGrid'
import { Container } from '#/components/Container'
import { fetchBars } from '#/lib/getBars'
import { algoliasearch } from 'algoliasearch'
import Link from 'next/link'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.ALGOLIA_SEARCH_ADMIN_KEY!
)

export default async function BarsPage({ searchParams }: any) {
  console.log({ searchParams })
  const bars = await fetchBars()

  const barTypes = searchParams.barType?.split(',')

  const type = barTypes.map((type: string) => `barType:${type}`)

  const settings = await searchClient.getSettings({ indexName: 'bars' })
  const request = await searchClient.search({
    requests: [
      {
        indexName: 'bars',
        query: '',
        facets: ['*'],
      },
      {
        indexName: 'bars',
        query: '',
        // filters: 'barType:Dark',
        facetFilters: [type],
        facets: ['*'],
      },
    ],
  })

  const [allFacets, search] = request.results

  // console.log(settings)
  // console.log(allFacets.hits)
  console.log(allFacets.facets)
  // console.log(request1.facets_stats)

  console.log(search.hits)
  console.log(search.facets)

  const {
    maker,
    barType,
    ingredients,
    productionCountry,
  }: Record<string, Record<string, number>> = allFacets.facets || {}

  return (
    <Container className="my-2">
      {/* <Search /> */}

      <Link href="/bars?barType=Dark,White">View Dark Bars</Link>

      <div>
        <div>Categories</div>

        <div>Type</div>
        {barType &&
          Object.entries(barType).map(([key, value]) => (
            <div key={key}>
              <input type="checkbox" checked={barTypes.includes(key)} /> {key} (
              {value})
            </div>
          ))}
      </div>

      <div className="mt-4">
        {search.hits.map((hit: any) => (
          <div key={hit.id}>
            {hit.id} {hit.barType} {hit.name}
          </div>
        ))}
      </div>

      <BarGrid title="Bars" hideTitle data={bars} />
    </Container>
  )
}
