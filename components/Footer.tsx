import { Container } from './Container'

export function Footer() {
  return (
    <Container as="footer">
      <div className="flex h-6 items-center justify-between border-t-[1px] border-primary-900/25">
        <div />
        <p className="text-base text-primary-900/50 xl:text-center">
          &copy; 2023 The Chocolate Bar Project
        </p>
      </div>
    </Container>
  )
}
