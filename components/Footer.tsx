import { Container } from './Container'

export function Footer() {
  return (
    <Container as="footer" className="flex h-6 items-center justify-between">
      <div />
      <p className="text-base text-primary-900/50 xl:text-center">
        &copy; 2023 The Chocolate Bar Project. All rights reserved.
      </p>
    </Container>
  )
}
