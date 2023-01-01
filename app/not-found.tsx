import { Container } from '#/components/Container'

export default function NotFound({ error, reset }: any) {
  return (
    <Container className="relative flex h-[90vh] flex-col items-center justify-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-brown-600">
        404
      </h1>
      <div>Page Not Found</div>
    </Container>
  )
}
