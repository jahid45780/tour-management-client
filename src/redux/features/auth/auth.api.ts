import { baseApi } from "@/redux/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        register:build.mutation({
            query:(userInfo)=>({
                url:"/user/register",
                method:"POST",
                body:userInfo
            })
        })
    })
})

export const { useRegisterMutation } = authApi