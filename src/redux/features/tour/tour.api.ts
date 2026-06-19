import { baseApi } from "@/redux/baseApi"


export const tourApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        tourTypeCreate:build.mutation({
            query:(tourTypeName)=>({
                url:"/tour/create-tour-type",
                method:"POST",
                data:tourTypeName
            }),
            invalidatesTags:["TOUR"]
        }),

       getTourTypes:build.query({
            query:()=>({
                url:"/tour/tour-types",
                method:"GET"
            }),
            providesTags:["TOUR"],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            transformResponse: (response: any) => response.data,
        })
    })
})

export const { useGetTourTypesQuery, useTourTypeCreateMutation} = tourApi