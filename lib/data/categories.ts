import bars, { Bar } from './bars'

function getCategoryValues(
  pointer: string,
  bars: Array<Bar>
): Array<CategoryItem> {
  const values: Record<string, number> = {}

  // bars.forEach((bar) => {
  //   const [first, second] = pointer.split('.')
  //   const value = bar[first][second]

  //   if (Array.isArray(value)) {
  //     value.map((singleValue) => {
  //       if (values[singleValue]) {
  //         values[singleValue] += 1
  //       } else {
  //         values[singleValue] = 1
  //       }
  //     })
  //   } else {
  //     if (values[value]) {
  //       values[value] += 1
  //     } else {
  //       values[value] = 1
  //     }
  //   }
  // })

  return Object.keys(values).map((key) => ({
    name: key,
    count: values[key],
  }))
}

// TODO: Ensure id is unique?
const categories: Array<Category> = [
  {
    title: 'Type',
    group: 'chocolate',
    pointer: 'chocolate.type',
    values: getCategoryValues('chocolate.type', bars),
  },
  {
    title: 'Ingredients',
    group: 'chocolate',
    pointer: 'chocolate.ingredients',
    values: getCategoryValues('chocolate.ingredients', bars),
  },
]

type CategoryGroup = 'chocolate' | 'packaging' | 'beans' | 'maker'

export interface CategoryItem {
  name: string
  count: number
}

export interface Category {
  title: string
  group: CategoryGroup
  pointer: string
  hint?: string
  values: Array<CategoryItem>
}

export default categories
