import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/PlatformTools/platformSettings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/PlatformTools/platformSettings/"!</div>
}
