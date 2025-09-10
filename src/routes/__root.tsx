import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import NavBar from '../components/NavBar.tsx'
export const Route = createRootRoute({
  component: () => (
    <>
    <NavBar/>
    <div className='bg-white min-h-screen'>
      <Outlet />
    </div>
      
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
