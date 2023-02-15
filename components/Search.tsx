'use client'

import { Disclosure, RadioGroup } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { algoliasearch } from 'algoliasearch'
import { e } from 'easy-tailwind'
import type { Hit } from 'instantsearch.js'
import _ from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  useDynamicWidgets,
} from 'react-instantsearch-hooks-web'

type BarHit = Hit<{
  releaseDate: number
  id: string
  slug: string
  maker: string
  name: string
  images: {
    HERO: { src: string; alt: string }
    PACKAGE_FRONT: { src: string; alt: string }
    PACKAGE_BACK: { src: string; alt: string }
    BAR_FRONT: { src: string; alt: string }
    BAR_BACK: { src: string; alt: string }
  }
  display?: 'HERO' | 'PACKAGE_FRONT' | 'PACKAGE_BACK' | 'BAR_FRONT' | 'BAR_BACK'
}>

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
) as any

function Refinement({ attribute }: { attribute: string }) {
  return (
    <Disclosure as="div" key={attribute} defaultOpen={attribute === 'barType'}>
      {({ open }) => (
        <>
          <h3 className="flow-root">
            <Disclosure.Button className="text-md flex w-full items-center justify-between py-1 text-gray-400 hover:text-gray-500">
              <span className="truncate font-medium text-primary-800	">
                {_.startCase(attribute)}
              </span>
              <span className="ml-2 flex items-center">
                {open ? (
                  <MinusIcon
                    className="h-2.5 w-2.5 text-primary-900/50"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusIcon
                    className="h-2.5 w-2.5 text-primary-900/50"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pb-1">
            <div className="max-h-[200px] space-y-4 overflow-y-auto">
              <RefinementList
                attribute={attribute}
                limit={30}
                // showMore
                // showMoreLimit={300}
                classNames={{
                  list: '',
                  item: '',
                  selectedItem: '',
                  label: 'flex my-0.5',
                  checkbox:
                    'h-2 w-2 mt-0.25 rounded border-primary-900/50 text-primary-500 focus:ring-primary-500 shrink-0',
                  labelText: 'ml-1 text-sm text-primary-700',
                  count:
                    'ml-auto pl-1 mt-0.25 text-sm text-primary-900/50 mx-1',
                }}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function AttributeList() {
  const { attributesToRender } = useDynamicWidgets()

  return (
    <div>
      {attributesToRender.map((attribute) => (
        <Refinement attribute={attribute} key={attribute}></Refinement>
      ))}
    </div>
  )
}

function BarGridItem({ hit: bar }: { hit: BarHit }) {
  const displayKey = bar.display || 'PACKAGE_FRONT'
  const displayImage = bar.images[displayKey]
  const hoverKey =
    displayKey === 'PACKAGE_FRONT'
      ? 'PACKAGE_BACK'
      : displayKey === 'PACKAGE_BACK'
      ? 'PACKAGE_FRONT'
      : displayKey === 'BAR_BACK'
      ? 'BAR_FRONT'
      : displayKey === 'BAR_FRONT'
      ? 'BAR_BACK'
      : 'HERO'
  const hoverImage = bar.images[hoverKey]
  return (
    <Link
      key={bar.id}
      href={`/bars/${bar.slug}`}
      className="group cursor-pointer"
    >
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={displayImage.src}
          alt={displayImage.alt}
          width={300}
          height={400}
          className="absolute h-full w-full object-contain object-center transition-opacity group-hover:opacity-0"
        />
        <Image
          src={hoverImage.src}
          alt={hoverImage.alt}
          width={300}
          height={400}
          className="absolute h-full w-full object-contain object-center opacity-0 transition-opacity group-hover:opacity-100"
        />
      </div>
      <div className="text-center">
        <h3 className="mt-4 text-sm text-primary-900/50">
          <Highlight attribute="maker" hit={bar} />
        </h3>
        <p className="text-md mt-1 font-medium text-primary-900">
          <Highlight attribute="name" hit={bar} />
        </p>
      </div>
    </Link>
  )
}

const now = Date.now()

const displayOptions = [
  { name: 'Hero', key: 'HERO' },
  { name: 'Package Front', key: 'PACKAGE_FRONT' },
  { name: 'Package Back', key: 'PACKAGE_BACK' },
  { name: 'Bar Front', key: 'BAR_FRONT' },
  { name: 'Bar Back', key: 'BAR_BACK' },
] as const

// TODO: Display Facets without matches https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/react-hooks/#displaying-facets-with-no-matches
// TODO: Format Ingredients for nested faceted filtering

export function Search({ initialState }: { initialState: any }) {
  const [display, setDisplay] = useState(displayOptions[1])

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="bars"
      initialUiState={{
        bars: initialState,
      }}
    >
      <Configure hitsPerPage={30} filters={`releaseDate <= ${now}`} />

      <section aria-labelledby="products-heading" className="pt-2 pb-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4">
          <form className="hidden lg:block">
            {/* <SearchBox
              placeholder="Search..."
              classNames={{
                input: '',
                submit: 'hidden',
                reset: 'hidden',
              }}
            /> */}

            <AttributeList />
          </form>

          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-row items-center justify-between">
              <h2 className="text-lg">Bars</h2>

              <RadioGroup
                value={display}
                onChange={setDisplay}
                className="hidden sm:block"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a display option
                </RadioGroup.Label>
                <div className="flex flex-row gap-[2px]">
                  {displayOptions.map((option) => (
                    <RadioGroup.Option
                      key={option.name}
                      value={option}
                      className={({ active, checked }) =>
                        e(
                          'cursor-pointer focus:outline-none',
                          active
                            ? 'relative z-10 ring-2 ring-primary-500 ring-offset-2'
                            : '',
                          checked
                            ? 'border-transparent bg-primary-600 text-white hover:bg-primary-700'
                            : 'bg-primary-100/25 text-primary-900 hover:bg-primary-100/50',
                          'py-0.5 px-1 text-sm'
                        )
                      }
                    >
                      <RadioGroup.Label as="span">
                        {option.name}
                      </RadioGroup.Label>
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Hits
              hitComponent={BarGridItem}
              transformItems={(items) =>
                items.map((item) => ({
                  ...item,
                  display: display.key,
                }))
              }
              classNames={{
                list: e('grid grid-cols-1 gap-y-10 gap-x-6', 'grid-cols-2', {
                  sm: 'grid-cols-3',
                  lg: 'grid-cols-3',
                }),
              }}
            />

            <Pagination
              classNames={{
                root: 'mt-8 flex justify-center',
                firstPageItem: 'hidden',
                lastPageItem: 'hidden',
                list: 'isolate inline-flex',
                item: 'inline-flex items-center text-sm font-medium text-primary-500 hover:bg-primary-100',
                selectedItem: 'bg-primary-100 text-primary-900',
                link: 'px-1 py-1',
                disabledItem: 'hidden',
              }}
            />
          </div>
        </div>
      </section>
    </InstantSearch>
  )
}
