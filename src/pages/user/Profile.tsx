
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Pencil,
  Phone,
  ShieldCheck,
  User,
  XCircle,
} from "lucide-react";

import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import UpdatedProfileModal from "@/components/modules/User/UpdatedProfileModal";


const Profile = () => {
  const { data, isLoading } = useUserInfoQuery(undefined);

  if (isLoading) return <Loading />;

  const user = data?.data;

  // Formatting date safely
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "N/A" : date.toLocaleDateString();
  };

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          
          {/* Cover Header */}
          <div className="relative h-48 sm:h-56 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
         <Button
  className="
    absolute right-4 top-4 sm:right-6 sm:top-6
    h-12 px-5
    rounded-2xl
    bg-white/90
    backdrop-blur-xl
    border border-white/30
    shadow-xl shadow-indigo-500/20
    hover:bg-white
    hover:shadow-2xl
    hover:shadow-indigo-500/30
    hover:-translate-y-1
    transition-all
    duration-300
    group
  "
>
  <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
      <Pencil className="h-4 w-4 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    </div>

    <span className="font-medium text-slate-800">
      <UpdatedProfileModal />
    </span>
  </div>
</Button>
          </div>

          {/* Profile Content */}
          <div className="px-6 sm:px-10 pb-10">
            
            {/* Header / Avatar Row */}
            <div className="-mt-16 sm:-mt-20 flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-6 pb-8 border-b border-slate-100">
              
              {/* Avatar Container */}
              <div className="relative group shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white bg-slate-50 shadow-xl overflow-hidden flex items-center justify-center">
                  {user?.picture ? (
                    <img
                      src={user.picture}
                      alt={user?.name || "User Avatar"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-4xl font-bold tracking-wider">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                </div>
              </div>

              {/* User Details */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {user?.name || "Anonymous User"}
                  </h1>
                </div>

                <p className="text-slate-500 font-medium text-base flex items-center gap-2">
                  {user?.email}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {user?.role && (
                    <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200/60 uppercase tracking-wider">
                      {user.role}
                    </span>
                  )}

                  {user?.IsActive && (
                    <span
                      className={`px-3.5 py-1 rounded-full font-semibold text-xs flex items-center gap-1.5 border uppercase tracking-wider ${
                        user.IsActive === "ACTIVE"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                          : "bg-rose-50 text-rose-700 border-rose-200/60"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.IsActive === "ACTIVE"
                            ? "bg-emerald-500"
                            : "bg-rose-500"
                        }`}
                      />
                      {user.IsActive}
                    </span>
                  )}

                  {user?.IsVerified && (
                    <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs flex items-center gap-1.5 border border-emerald-200/60">
                      <CheckCircle2 size={14} className="text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Information Section Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              
              {/* Personal Information */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-7 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  Personal Information
                </h2>

                <div className="space-y-5">
                  <InfoItem
                    icon={<User className="h-5 w-5 text-indigo-600" />}
                    title="Full Name"
                    value={user?.name || "Not Provided"}
                  />
                  <InfoItem
                    icon={<Mail className="h-5 w-5 text-indigo-600" />}
                    title="Email Address"
                    value={user?.email || "Not Provided"}
                  />
                  <InfoItem
                    icon={<Phone className="h-5 w-5 text-indigo-600" />}
                    title="Phone Number"
                    value={user?.phone || "Not Provided"}
                  />
                  <InfoItem
                    icon={<MapPin className="h-5 w-5 text-indigo-600" />}
                    title="Location / Address"
                    value={user?.address || "Not Provided"}
                  />
                </div>
              </div>

              {/* Account Information */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-7 space-y-6">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  Account Details
                </h2>

                <div className="space-y-5">
                  <InfoItem
                    icon={<ShieldCheck className="h-5 w-5 text-indigo-600" />}
                    title="Account Role"
                    value={user?.role || "User"}
                  />
                  <InfoItem
                    icon={<BadgeCheck className="h-5 w-5 text-indigo-600" />}
                    title="Verification Status"
                    value={
                      user?.IsVerified ? (
                        <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-4 h-4 inline" /> Verified
                        </span>
                      ) : (
                        <span className="text-slate-500 flex items-center gap-1 font-medium">
                          <XCircle className="w-4 h-4 inline" /> Unverified
                        </span>
                      )
                    }
                  />
                  <InfoItem
                    icon={<CalendarDays className="h-5 w-5 text-indigo-600" />}
                    title="Member Since"
                    value={formatDate(user?.createdAt)}
                  />
                  <InfoItem
                    icon={<Clock className="h-5 w-5 text-indigo-600" />}
                    title="Last Updated"
                    value={formatDate(user?.updatedAt)}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  );
};

export default Profile;

type InfoItemProps = {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
};

const InfoItem = ({ icon, title, value }: InfoItemProps) => {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        {icon}
      </div>

      <div className="overflow-hidden">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
          {title}
        </p>
        <div className="text-base font-semibold text-slate-800 truncate mt-0.5">
          {value}
        </div>
      </div>
    </div>
  );
};