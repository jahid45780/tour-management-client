import RegisterFrom from "@/components/modules/Authorization/RegisterFrom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    

        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col lg:flex-row">
        
        {/* Left Side */}
        <div className="lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Tour"
            className="w-full h-[300px] lg:h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Explore The World
            </h1>

            <p className="text-slate-200 mt-3 text-lg">
              Start your next adventure with TourX
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 p-6 sm:p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white">
                Create Account
              </h2>

              <p className="text-slate-400 mt-2">
                Join with us and discover amazing tours
              </p>
            </div>

            {/* register from add hobay  */}
        
            <RegisterFrom/>
                
             <Link to="/login">
                <p className="text-center lg:text-left text-slate-400 mt-6">
              Already have an account?{" "}
              <span className="text-cyan-400 cursor-pointer">
                Login
              </span>
            </p>
             </Link>
           
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;