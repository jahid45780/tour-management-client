

import LoginForm from "@/components/modules/Authorization/LoginFrom";
import { MapPinned } from "lucide-react";


const Login = () => {

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

            {/* Login Form */}
            <LoginForm/>

         
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;