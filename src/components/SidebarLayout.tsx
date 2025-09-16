import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSideBar.tsx"


const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider> );
}
 
export default SideBarLayout;