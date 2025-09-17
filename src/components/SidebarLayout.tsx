import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSideBar.tsx"
import { AppHeader } from "./AppHeader";


const SideBarLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
      <>
    <SidebarProvider>
      <AppSidebar />
      
      <main  className="w-full">
        <AppHeader />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider></> );
}
 
export default SideBarLayout;