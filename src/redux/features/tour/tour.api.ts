import { baseApi } from "@/redux/baseApi"
import type { IResponse } from "@/types"
import type { ITourPackage } from "@/types/tourTypes"


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

         tourCreate:build.mutation({
            query:(tourName)=>({
                url:"/tour/create",
                method:"POST",
                data:tourName
            }),
            invalidatesTags:["TOUR"]
        }),

           getAllTours:build.query<ITourPackage[], unknown>({
            query:(params)=>({
                url:"/tour",
                method:"GET",
               params: params,
            }),
            providesTags:["TOUR"],
            transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
        }),

          tourTypeRemove:build.mutation({
            query:(tourTypeId)=>({
                url:`/tour/tour-types/${tourTypeId}`,
                method:"DELETE",
            }),
            invalidatesTags:["TOUR"]
        }), 

         tourRemove:build.mutation({
            query:(id)=>({
                url:`/tour/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["TOUR"]
        }),

       getTourTypes:build.query({
            query:(params)=>({
                url:"/tour/tour-types",
                method:"GET",
                params
            }),
            providesTags:["TOUR"],

        })
    })
})

export const { 
useGetTourTypesQuery, 
useTourTypeCreateMutation, 
useTourTypeRemoveMutation,
useTourCreateMutation,
useGetAllToursQuery,
useTourRemoveMutation
} = tourApi