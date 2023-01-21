'use client'

import { algoliasearch } from 'algoliasearch'
import {
  DynamicWidgets,
  HierarchicalMenu,
  Hits,
  InstantSearch,
  Menu,
  RefinementList,
  SearchBox,
  useDynamicWidgets,
  useRefinementList,
} from 'react-instantsearch-hooks-web'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
) as any

function Refinement({ attribute }: { attribute: string }) {
  const list = useRefinementList({ attribute })

  console.log(list)

  return (
    <>
      <strong>{attribute}</strong>
      <RefinementList attribute={attribute} />
    </>
  )
}

function Foo() {
  const { attributesToRender } = useDynamicWidgets()

  return (
    <div>
      {attributesToRender.map((attribute) => (
        <Refinement attribute={attribute} key={attribute}></Refinement>
      ))}
    </div>
  )
}

export function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="bars">
      <Foo />
      <DynamicWidgets>
        <RefinementList attribute="barType" />
        <HierarchicalMenu attributes={['categories.lvl0', 'categories.lvl1']} />
        <Menu attribute="category" />
      </DynamicWidgets>

      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}
