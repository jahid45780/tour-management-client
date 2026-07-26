import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItemes";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import type { IRole } from "@/types";
import Tour from "@/pages/Tour";
import TourDetails from "@/pages/TourDetails";
import HomePage from "@/pages/HomePage";
import Booking from "@/pages/Booking";
import PaymentSuccess from "@/components/modules/Admin/Payment/PaymentSuccess";
import PaymentFail from "@/components/modules/Admin/Payment/PaymentFail";
import PaymentCancel from "@/components/modules/Admin/Payment/PaymentCancel";


 export const router = createBrowserRouter([
   { 
    Component:App,
    path:'/',
    children:[
      {
        Component:HomePage,
        index:true
      },
      {
         Component:withAuth(About),
         path:'/about'
      },
      {
        Component:Tour,
        path:"/tours"
      },
      {
        Component:TourDetails,
        path:'/tours/:id'
      },
      {
        Component:withAuth(Booking),
        path:"/booking/:id"
      }
  ]
},
{
  Component:withAuth (DashboardLayout, role.ADMIN as IRole),
  path:'/admin',
  children:[
    {index:true, element:<Navigate to="/admin/analytics"/>},
    ...generateRoutes(adminSidebarItems)]
},
{
  Component:DashboardLayout,
  path:'/user',
  children:[
   {index:true, element:<Navigate to="/user/bookings"/>},
    ...generateRoutes(userSidebarItems)]
},
{
    Component:Login,
    path:'/login'
},
{
    Component:Register,
    path:'/register'
},
{
    Component:Verify,
    path:'/verify'
},
{
    Component:Unauthorized,
    path:'/unauthorized'
},
{
    Component:PaymentSuccess,
    path:'/payment/success'
},
{
    Component:PaymentFail,
    path:'/payment/fail'
},
{
    Component:PaymentCancel,
    path:'/payment/cancel'
}

])