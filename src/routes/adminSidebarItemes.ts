import AllTours from "@/components/modules/Admin/Tour/AllTours";
import AddDivision from "@/pages/admin/AddDivision";
import AddTour from "@/pages/admin/AddTour";
import AddTourType from "@/pages/admin/AddTourType";
import BookingStats from "@/pages/admin/BookingStats";
import PaymentStats from "@/pages/admin/PaymentStats";
import ToursStats from "@/pages/admin/ToursStats";
// import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(()=> import("@/pages/admin/Analytics"))

export const adminSidebarItems:ISidebarItem[] = [
    {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
        {
        title: "Booking",
        url: "/admin/booking",
        component: BookingStats,
      },
        {
        title: "Tour Analytics",
        url: "/admin/tourStats",
        component: ToursStats,
      },
       {
        title: "Payment Analytics",
        url: "/admin/paymentStats",
        component: PaymentStats,
      }
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
        {
        title: "Add Division",
        url: "/admin/add-add-division",
        component: AddDivision,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "All Tours",
        url: "/admin/all-tours",
        component: AllTours,
      },
    
   
    ],
  },
  
  ]