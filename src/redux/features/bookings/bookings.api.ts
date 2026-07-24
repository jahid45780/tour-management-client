
/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";



 const bookingsApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   bookings:build.query({
                    query:()=>({
                        url:"/myBookings/bookings",
                        method:"GET"
                    }),
                    providesTags:["STATS"],
                    transformResponse: (response:any) => response.data,
                }),
  
     }) 
})

export const {
   useBookingsQuery
} = bookingsApi
