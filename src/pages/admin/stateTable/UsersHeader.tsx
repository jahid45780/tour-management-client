import { Users, Sparkles } from "lucide-react";

const UsersHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-6 mb-6">
      {/* Background Blur */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
            <Users className="h-7 w-7 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">
              User Management
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Manage users, roles, permissions and account status.
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-400">
          <Sparkles size={18} />
          <span className="text-sm font-medium">
            Admin Panel
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersHeader;