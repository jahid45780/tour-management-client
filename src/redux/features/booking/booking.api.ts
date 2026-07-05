import { baseApi } from "@/redux/baseApi"



export const bookingApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        bookingCreate:build.mutation({
            query:(bookingData)=>({
                url:"/booking",
                method:"POST",
                data:bookingData
            }),
            invalidatesTags:["BOOKING"]
        }),

    })
})

export const { 
   useBookingCreateMutation
} = bookingApi