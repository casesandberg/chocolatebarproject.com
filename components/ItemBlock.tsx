type ItemBlockProps = {
  title: string
  children: React.ReactNode
  renderSupporting?: () => React.ReactElement
}

export function ItemBlock({
  title,
  children,
  renderSupporting,
}: ItemBlockProps) {
  // TODO: Change flex to grid to simplify
  return (
    <>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-10">
        <div className="flex-2 flex-shrink-0" />

        <h3 className="flex-3 text-lg font-medium uppercase leading-6 text-primary-900">
          {title}
        </h3>
      </div>

      <div className="mt-2 mb-8 flex flex-col gap-2 sm:flex-row sm:gap-10">
        <div className="flex-2 flex-shrink-0">{renderSupporting?.()}</div>

        <div className="flex flex-3 flex-col">{children}</div>
      </div>
    </>
  )
}
