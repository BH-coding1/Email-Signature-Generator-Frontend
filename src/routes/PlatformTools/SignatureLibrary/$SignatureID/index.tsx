import { Protect,  } from '@clerk/clerk-react';
import { createFileRoute, Navigate,  } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/PlatformTools/SignatureLibrary/$SignatureID/',
)({
 component: () => (
    <Protect
      fallback={<Navigate to="/sign-in" search={{ redirect: window.location.pathname }} />}
    >
      <RouteComponent />
    </Protect>
  ),
});
function RouteComponent() {
  return (
    <div>Nothing to see here lol </div>
  )
}
