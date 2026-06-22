import { baseApi } from "@/redux/baseApi"


export const DivisionApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        divisionCreate:build.mutation({
            query:(divisionName)=>({
                url:"/tour/create-tour-type",
                method:"POST",
                data:divisionName
            }),
            invalidatesTags:["TOUR"]
        }),

       getTourTypes:build.query({
            query:()=>({
                url:"/tour/tour-types",
                method:"GET"
            }),
            providesTags:["TOUR"],
          
        })
    })
})

export const { useDivisionCreateMutation } = DivisionApi