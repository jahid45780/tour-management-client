import { baseApi } from "@/redux/baseApi";
import type { ILogin, IResponse, ISendOtp, IVerifyOtp } from "@/types";




const authApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        register:build.mutation({
            query:(userInfo)=>({
                url:"/user/register",
                method:"POST",
                data:userInfo
            })
        }),
        login:build.mutation<null, ILogin>({
            query:(userInfo)=>({
                url:"/auth/login",
                method:"POST",
                data:userInfo
            })
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
        })
    })
})

export const { useRegisterMutation, useLoginMutation, useSentOtpMutation, useVerifyOtpMutation } = authApi