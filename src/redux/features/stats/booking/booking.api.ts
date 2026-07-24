
/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";



 const bookingStatsApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   bookingStats:build.query({
                    query:()=>({
                        url:"/stats/booking",
                        method:"GET"
                    }),
                    providesTags:["STATS"],
                    transformResponse: (response:any) => response.data,
                }),
  
     }) 
})

export const {
   useBookingStatsQuery
} = bookingStatsApi
