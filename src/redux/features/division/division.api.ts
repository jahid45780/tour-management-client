import { baseApi } from "@/redux/baseApi"


export const DivisionApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        divisionCreate:build.mutation({
            query:(divisionName)=>({
                url:"/division/create",
                method:"POST",
                data:divisionName
            }),
            invalidatesTags:["DIVISION"]
        }),

       getTourDivision:build.query({
            query:()=>({
                url:"/division",
                method:"GET"
            }),
            providesTags:["DIVISION"],
          
        })
    })
})

export const { useDivisionCreateMutation, useGetTourDivisionQuery } = DivisionApi