import { Folder, Home, Edit, Search, Settings, LogOut,LineSquiggle } from "lucide-react";

import {
  Sidebar,
  SidebarFooter,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/platformTools/dashboard",
    icon: Home,
  },
  {
    title: "Signature Generator",
    url: "/platformTools/SignatureGenerator",
    icon: Edit,
  },
  {
    title: "Signature Library",
    url: "/platformTools/library",
    icon: Folder,
  },
  {
    title: "Integration",
    url: "/platformTools/intergration",
    icon: LineSquiggle,
  },
  {
    title: "Settings",
    url: "/platformTools/platformSettings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  return (
    <Sidebar>
      <SidebarHeader className="items-center font-semibold text-xl mt-4">
        MailGen
      </SidebarHeader>
      <SidebarContent className="mt-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className= {`flex items-center px-4 h-12 rounded-3xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:text-sm ${
                          isActive
                            ? "bg-blue-100 text-gray-800 font-medium border-l-4  border-blue-300"
                            : ""
                        }`}
                    >
                      <Link
                        to={item.url}
                        
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
