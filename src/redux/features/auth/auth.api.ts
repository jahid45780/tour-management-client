import { baseApi } from "@/redux/baseApi";
import type { ILogin, IResponse, ISendOtp, IVerifyOtp } from "@/types";




 export const authApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        register:build.mutation({
            query:(userInfo)=>({
                url:"/user/register",
                method:"POST",
                data:userInfo
            })
        }),
        login:build.mutation<IResponse<null>, ILogin>({
            query:(userInfo)=>({
                url:"/auth/login",
                method:"POST",
                data:userInfo
            })
        }),
         logout:build.mutation({
            query:()=>({
                url:"/auth/logout",
                method:"POST",    
            }),
            invalidatesTags: ["USER"],
        }),
        sentOtp:build.mutation<IResponse<null>, ISendOtp>({
            query:(userInfo)=>({
                url:"/otp/send",
                method:"POST",
                data:userInfo
            })
        }),
        verifyOtp:build.mutation<IResponse<null>, IVerifyOtp>({
            query:(userInfo)=>({
                url:"/otp/verify",
                method:"POST",
                data:userInfo
            })
        }),
       userInfo:build.query({
            query:()=>({
                url:"/user/me",
                method:"GET"
            }),
       providesTags: ["USER"],
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useSentOtpMutation, useVerifyOtpMutation,  useLogoutMutation, useUserInfoQuery } = authApi