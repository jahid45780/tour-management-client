import { useState } from "react";
import { Eye, EyeOff, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {

     const [showPassword, setShowPassword] = useState(false);

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-2xl">
                <MapPinned className="w-7 h-7" />
              </div>

              <div>
                <h1 className="text-3xl font-bold">TourX</h1>
                <p className="text-cyan-100 text-sm">
                  Explore the world with us
                </p>
              </div>
            </div>

            <div className="mt-16 space-y-5">
              <h2 className="text-4xl font-bold leading-tight">
                Discover Beautiful Destinations
              </h2>

              <p className="text-cyan-100 text-lg">
                Book tours, explore amazing places, and create unforgettable
                memories around the globe.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-white/80"></div>
            <div className="w-3 h-3 rounded-full bg-white/50"></div>
            <div className="w-3 h-3 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 flex items-center">
          <div className="w-full">
            <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
              <MapPinned className="text-cyan-500 w-7 h-7" />
              <h1 className="text-3xl font-bold text-white">TourX</h1>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">
                Welcome Back 👋
              </h2>

              <p className="text-slate-400 mt-2">
                Login to continue your travel journey
              </p>
            </div>

            <form className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-slate-300 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
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
        </div>
      </div>
    </div>
  );
};

export default Login;