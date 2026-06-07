

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, } from "lucide-react"


// This is sample data.
const data = {

  navMain: [
    {
      title: "Tour Management",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
        },
        {
          title: "Add Tour",
          url: "/admin/add-tour",
        },
       
      ],
    },
  
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
           <h1>logo</h1>
      <SidebarContent>
         <NavMain items={data.navMain} /> 
        
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
