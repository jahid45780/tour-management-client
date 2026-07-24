/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";



 const paymentStatsApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   paymentStats:build.query({
                    query:()=>({
                        url:"/stats/payment",
                        method:"GET"
                    }),
                    providesTags:["STATS"],
                    transformResponse: (response:any) => response.data,
                }),
  
     }) 
})

export const {
   usePaymentStatsQuery
} = paymentStatsApi