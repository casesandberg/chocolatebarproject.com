import { Bar } from './data/bars'

export function generateSlug(bar: Bar) {
  const string = `${bar.name} ${bar.maker}`

  // TODO: Regex to strip for safe url vars
  return string.replace(/\s/g, '-').replace('%', '').toLowerCase()
}
