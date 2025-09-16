import { Folder, Home, Edit, Search, Settings,LogOut } from "lucide-react"
 
import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
 
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/platformTools/dashboard",
    icon: Home,
  },
  {
    title: "Signature Generator",
    url: "#",
    icon: Edit,
  },
  {
    title: "Signature Library",
    url: "#",
    icon: Folder,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/platformTools/platformSettings",
    icon: Settings,
  },
]
 
 
export function AppSidebar() {
  return (
      <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MailGen</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       <SidebarFooter>
        <SidebarMenu>
                <SidebarMenuItem >
                  <SidebarMenuButton asChild>
                    <Link to='/logout'>
                      <LogOut />
                      <span>Logout</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              
            </SidebarMenu>
       </SidebarFooter>
    </Sidebar>
  )
}