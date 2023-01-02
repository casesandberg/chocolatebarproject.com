export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-[calc(100vh-theme(space.12))] bg-background">
      {children}
    </section>
  )
}
