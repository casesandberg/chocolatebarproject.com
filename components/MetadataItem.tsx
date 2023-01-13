import { Ingridients } from '#/lib/data/bars'
import { e } from 'easy-tailwind'

export type MetadataItemProps = {
  label: string
  hint?: string
  value?: string | number | Array<string>
  transformValue?: (value: string | number) => string
}

export function MetadataItem({
  label,
  hint,
  value,
  transformValue = (value) => String(value),
}: MetadataItemProps) {
  return value ? (
    <div className="py-1 font-mono sm:grid sm:grid-cols-3 sm:gap-1 sm:py-1">
      <dt className="p-0.5 pl-0 text-sm text-primary-900/75">{label}</dt>
      <dd className="mt-1 text-sm text-primary-900 sm:col-span-2 sm:mt-0">
        <TagList>
          {Array.isArray(value) ? (
            value.map((item) => <Tag key={item}>{transformValue(item)}</Tag>)
          ) : (
            <Tag>{transformValue(value)}</Tag>
          )}
        </TagList>
      </dd>
    </div>
  ) : null
}

export function IngredientMetadataItem({
  label,
  hint,
  value,
}: Omit<MetadataItemProps, 'value' | 'transformValue'> & {
  value: Ingridients
}) {
  return value ? (
    <div className="py-1 font-mono sm:grid sm:grid-cols-3 sm:gap-1 sm:py-1">
      <dt className="p-0.5 pl-0 text-sm text-primary-900/75">{label}</dt>
      <dd className="mt-1 text-sm text-primary-900 sm:col-span-2 sm:mt-0">
        <TagList>
          {value.map((item) => {
            if (Array.isArray(item)) {
              const [ingredient, subIngridients] = item

              return (
                <Tag key={ingredient}>
                  {ingredient} ({subIngridients.join(', ')})
                </Tag>
              )
            }

            return <Tag key={item}>{item}</Tag>
          })}
        </TagList>
      </dd>
    </div>
  ) : null
}

export function DimensionsMetadataItem({
  label,
  hint,
  value,
  transformValue = (value) => String(value),
}: Omit<MetadataItemProps, 'value'> & { value: [number, number, number] }) {
  return value ? (
    <div className="py-1 font-mono sm:grid sm:grid-cols-3 sm:gap-1 sm:py-1">
      <dt className="p-0.5 pl-0 text-sm text-primary-900/75">{label}</dt>
      <dd className="mt-1 text-sm text-primary-900 sm:col-span-2 sm:mt-0">
        <TagList>
          {value.map((item, i) => (
            <Tag
              key={item}
              className={e(
                'mr-2 before:absolute before:-ml-[20px] before:text-primary-200',
                i !== 0 && 'before:content-["x"]'
              )}
            >
              {transformValue(item)}
            </Tag>
          ))}
        </TagList>
      </dd>
    </div>
  ) : null
}

function TagList({ children }: { children: React.ReactNode }) {
  return <div className={e('flex flex-row flex-wrap gap-1')}>{children}</div>
}

// TODO: Animate background sliding in horizontally on hover
function Tag({
  children,
  className,
  as: As = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: keyof React.ReactHTML
}) {
  return (
    <As className={e(`bg-primary-100/25 p-0.5 ${className}`)}>{children}</As>
  )
}

export function transformPercent(value: string | number) {
  return `${value}%`
}

export function transformPrice(value: string | number) {
  return `$${value} USD`
}

export function transformWeight(value: string | number) {
  return `${value}g`
}

export function transformDimensions(value: string | number) {
  return `${value}mm`
}
