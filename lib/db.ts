import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Bar } from './data/bars'

type Data = {
  bars: Bar[]
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')

const adapter = new JSONFile<Data>(file)
const db = new Low(adapter)

export const getData = async () => {
  await db.read()
  db.data ||= { bars: [] }
  return db.data
}
