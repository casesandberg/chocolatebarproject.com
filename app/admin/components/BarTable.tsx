'use client'

import { Bar } from '#/lib/data/bars'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

export type TableProps = {
  bars: Array<Bar>
}

const columnHelper = createColumnHelper<Bar>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  }),
  columnHelper.accessor('maker', {
    cell: (info) => info.getValue(),
    header: () => <span>Maker</span>,
  }),
  columnHelper.display({
    id: 'edit',
    cell: (props) => <a href={`/admin/bars/${props.row.original.id}`}>Edit</a>,
  }),
]

export function BarTable({ bars }: TableProps) {
  const table = useReactTable({
    data: bars,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                scope="col"
                className="whitespace-nowrap px-2 py-1 text-left text-sm font-semibold text-primary-900/50"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="whitespace-nowrap px-2 py-1 text-sm text-gray-500"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
