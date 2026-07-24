

import Bookings from "@/pages/user/Bookings";
import Profile from "@/pages/user/Profile";
import type { ISidebarItem } from "@/types";


export const userSidebarItems:ISidebarItem[] = [
    {
    title: "History",
    items: [
      {
        title: " My Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
       {
        title: "My Profile",
        url: "/user/profile",
        component: Profile,
      },
    ],
  },
 
  
  ]