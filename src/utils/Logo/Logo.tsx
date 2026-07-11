const Logo = () => {
  return (
    <div className="group flex items-center gap-3 m-3">
      {/* Wave Icon */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 34
               C14 24 22 44 30 34
               S46 24 58 34"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M6 46
               C14 36 22 56 30 46
               S46 36 58 46"
            stroke="rgba(255,255,255,.65)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand */}
      <div>
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-2xl font-black text-transparent">
          TourWave
        </h1>

        <p className="text-xs text-muted-foreground">
          Explore • Discover • Travel
        </p>
      </div>
    </div>
  );
};

export default Logo;