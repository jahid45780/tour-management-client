import { MapPinned } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center">

        {/* Logo */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/30 animate-bounce">
          <MapPinned size={42} className="text-white" />
        </div>

        {/* Brand */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-wide">
          <span className="text-blue-500">Tour</span>
          <span className="text-cyan-400">Wave</span>
        </h1>

        <p className="mt-2 text-muted-foreground">
          Explore • Discover • Travel
        </p>

        {/* Loading Dots */}
        <div className="mt-8 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></span>
          <span className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.15s]"></span>
          <span className="h-3 w-3 rounded-full bg-blue-500 animate-bounce [animation-delay:0.3s]"></span>
        </div>

        <p className="mt-5 text-sm text-muted-foreground animate-pulse">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default Loading;