import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-red-500">403</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Access Denied
        </h2>

        <p className="mt-3 text-slate-400">
          Sorry, you don't have permission to access this page.
          Please contact the administrator if you believe this is a mistake.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-105"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;