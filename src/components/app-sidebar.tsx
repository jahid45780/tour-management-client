

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { getSidebarItems } from "@/utils/getSideberItem"
import Logo from "@/utils/Logo/Logo"
import { Link } from "react-router-dom"


// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data: userData} = useUserInfoQuery(undefined)
  
  const data = {
  // navMain:adminSidebarItems
  navMain:getSidebarItems(userData?.data?.role)
}

  return (
    <Sidebar collapsible="icon" {...props}>
           <Link to="/" >
           <Logo/>
           </Link>
      <SidebarContent>
         <NavMain items={data.navMain} /> 
        
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
