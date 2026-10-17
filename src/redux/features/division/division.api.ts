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
          
        }),

        
       deleteTourDivision:build.mutation({
            query:(id) =>({
                url:`/division/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["DIVISION"]
       })
    })


})

export const { useDivisionCreateMutation, useGetTourDivisionQuery, useDeleteTourDivisionMutation } = DivisionApi