import { Bar } from '#/lib/data/bars'
import { e } from 'easy-tailwind'
import Image from 'next/image'
import Link from 'next/link'

type BarGridProps = {
  title: string
  hideTitle?: boolean

  data: Array<Bar>
}

export function BarGrid({ title, hideTitle, data }: BarGridProps) {
  return (
    <>
      <h2 className={hideTitle ? 'sr-only' : ''}>{title}</h2>

      <div
        className={e('grid grid-cols-1 gap-y-10 gap-x-6', 'grid-cols-2', {
          sm: 'grid-cols-3',
          lg: 'grid-cols-4',
        })}
      >
        {data.map((bar) => (
          <Link key={bar.id} href={`/bars/${bar.slug}`} className="group">
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 relative w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={bar.images.PACKAGE_FRONT.src}
                alt={bar.images.PACKAGE_FRONT.alt}
                width={300}
                height={400}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{bar.maker}</h3>
            <p className="text-md mt-1 font-medium text-gray-900">{bar.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
