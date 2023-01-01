type MetadataProps = {
  children: React.ReactNode
  className?: string
}

export function Metadata({ children, className }: MetadataProps) {
  // TODO: Colocate padding clipping into MetadataItem
  return (
    <dl className={className + ' [&>:first-child]:pt-0 [&>:last-child]:pb-0'}>
      {children}
    </dl>
  )
}
