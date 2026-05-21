/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


   
  const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
     const { register, handleSubmit } = useForm();
    const [login] = useLoginMutation()

   const onSubmit = async(data:any)=>{
    try {
      
      const res = await login(data).unwrap()
      toast.success("login successful")
      console.log(res.data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      console.error(error);
       if(error.status === 401){
         toast.error("your account is not verified yet. Please verify your account first")
         navigate("/verify")
       }
    }
   }

  return (
    <div>
         <form 
         onSubmit={handleSubmit(onSubmit)}
         className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-xl border border-slate-700 bg-slate-800/60 px-4 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 font-medium">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
                    className="w-full h-12 rounded-xl border border-slate-700 bg-slate-800/60 px-4 pr-12 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-400">
                  <input
                    type="checkbox"
                    className="accent-cyan-500"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                Login
              </button>
            </form>


               {/* Divider */}
            <div className="relative my-7">
              <div className="border-t border-slate-700"></div>

              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-3 text-sm text-slate-500">
                OR
              </span>
            </div>

            {/* Google Button */}
            <button className="w-full h-12 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white font-medium transition">
              Continue with Google
            </button>

            {/* Signup */}
            <Link to="/register">
           <p className="text-center text-slate-400 mt-8">
              Don&apos;t have an account?{" "}
              <span className="text-cyan-400 cursor-pointer hover:text-cyan-300">
                Register
              </span>
            </p>
            </Link>
    </div>
  );
};

export default LoginForm;