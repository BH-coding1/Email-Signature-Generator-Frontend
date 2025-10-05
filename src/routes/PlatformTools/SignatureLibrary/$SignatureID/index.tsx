import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/PlatformTools/SignatureLibrary/$SignatureID/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/PlatformTools/SignatureLibrary/$SignatureID/"!</div>
  )
}
