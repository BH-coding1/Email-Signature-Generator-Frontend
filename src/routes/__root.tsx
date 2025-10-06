import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanstackDevtools } from '@tanstack/react-devtools'
import { QueryClient } from '@tanstack/react-query'


type RouterContext ={
  queryClient:QueryClient
}
export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
    
    <div className=''>
      <Outlet />
    </div>
{/*       
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
      /> */}
    </>
  ),
})
