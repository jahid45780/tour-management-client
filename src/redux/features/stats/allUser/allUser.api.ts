/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";



 const allUserApi = baseApi.injectEndpoints({
     endpoints:(build) =>({

        
                   getAllUser:build.query({
                    query:()=>({
                        url:"/user/all-users",
                        method:"GET"
                    }),
                    providesTags:["USER"],
                    transformResponse: (response:any) => response.data,
                }),

               UserRemove:build.mutation({
               query:(userId)=>({
                url:`/user/${userId}`,
                method:"DELETE",
               }),
              invalidatesTags:["USER"]
             }), 


             changeUserRole:build.mutation({
                query:({id, role})=>({
                url: `/user/change-role/${id}`,
                method: "PATCH",
                data: { role },
                }),
                invalidatesTags: ["USER"],
             })

     }) 

})

export const {
   useGetAllUserQuery,
   useUserRemoveMutation,
   useChangeUserRoleMutation
} = allUserApi
