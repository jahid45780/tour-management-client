/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";
import type { IUserStats } from "@/types/stats.types";


 const adminStatsApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   getUserStats:build.query<IUserStats, void>({
                    query:()=>({
                        url:"/stats/user",
                        method:"GET"
                    }),
                    providesTags:["STATS"],
                    transformResponse: (response:any) => response.data,
                }),
  
     }) 
})

export const {
   useGetUserStatsQuery
} = adminStatsApi
