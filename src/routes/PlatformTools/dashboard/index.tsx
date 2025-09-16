import SideBarLayout from '@/components/SidebarLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/PlatformTools/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (

    <SideBarLayout>
      <div className='text-black'>HEllo</div>

    </SideBarLayout>


  )
}
