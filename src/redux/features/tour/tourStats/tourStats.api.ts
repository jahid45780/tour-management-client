
/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";



 const tourStatsApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   tourStats:build.query({
                    query:()=>({
                        url:"/stats/tour",
                        method:"GET"
                    }),
                    providesTags:["STATS"],
                    transformResponse: (response:any) => response.data,
                }),
  
     }) 
})

export const {
   useTourStatsQuery
} = tourStatsApi
