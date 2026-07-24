import React, { useState, useMemo } from "react";
import { useBookingsQuery } from "@/redux/features/bookings/bookings.api";
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  MapPin, 
  Search, 
  Filter,
  Eye,
  CreditCard
} from "lucide-react";
import Loading from "@/components/shared/Loading";

// --- Types ---
interface Tour {
  _id: string;
  title: string;
  descriptions: string;
  images: string[];
  location: string;
  costFrom: number;
  startDate: string;
  endDate: string;
}

interface Booking {
  _id: string;
  user: string;
  tour: Tour;
  status: "COMPLETE" | "PENDING" | "CANCELLED" | string;
  guestCount: number;
  createdAt: string;
  updatedAt: string;
  payment: string;
}

export default function BookingAnalytics() {
  const { data, isLoading, isError } = useBookingsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  // Extract bookings list safely
  const bookings: Booking[] = useMemo(() => data || [], [data]);

  // --- Analytics Calculations ---
  const stats = useMemo(() => {
    const totalBookings = bookings.length;
    const completedBookings = bookings.filter((b) => b.status === "COMPLETE");
    const pendingBookings = bookings.filter((b) => b.status === "PENDING");
    
    const totalGuests = bookings.reduce((sum, b) => sum + (b.guestCount || 0), 0);
    
    // Total Revenue calculated from completed bookings
    const totalRevenue = completedBookings.reduce(
      (sum, b) => sum + (b.tour?.costFrom || 0) * (b.guestCount || 1),
      0
    );

    return {
      totalBookings,
      completedCount: completedBookings.length,
      pendingCount: pendingBookings.length,
      totalGuests,
      totalRevenue,
    };
  }, [bookings]);

  // --- Filtering ---
  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchesSearch =
        b.tour?.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.tour?.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b._id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || b.status.toUpperCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, searchTerm, statusFilter]);

  if (isLoading) {
    return <Loading/>
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-500">
        Failed to load bookings data. Please try refreshing the page.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 space-y-8 dark:bg-slate-950">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Booking Management & Analytics
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Overview of overall tour reservations, revenue, and customer bookings.
          </p>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Revenue */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Revenue
            </span>
            <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              BDT {stats.totalRevenue.toLocaleString()}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Calculated from completed bookings
            </p>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Bookings
            </span>
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.totalBookings}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {stats.completedCount} Completed • {stats.pendingCount} Pending
            </p>
          </div>
        </div>

        {/* Total Guests */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Total Guests
            </span>
            <div className="rounded-lg bg-purple-100 p-2 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.totalGuests}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Across all current reservations
            </p>
          </div>
        </div>

        {/* Pending Approval */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Pending Action
            </span>
            <div className="rounded-lg bg-amber-100 p-2 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {stats.pendingCount}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Requires confirmation or payment
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by tour name, location, or booking ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-sm text-slate-900 focus:border-slate-400 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="ALL">All Statuses</option>
              <option value="COMPLETE">Complete</option>
              <option value="PENDING">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800/50 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-4">Tour details</th>
                <th scope="col" className="px-6 py-4">Booking Date</th>
                <th scope="col" className="px-6 py-4">Guests</th>
                <th scope="col" className="px-6 py-4">Total Cost</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => {
                  const tour = booking.tour;
                  const totalCost = (tour?.costFrom || 0) * booking.guestCount;
                  const imageSrc =
                    tour?.images?.[0] ||
                    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=150&auto=format&fit=crop&q=60";

                  return (
                    <tr
                      key={booking._id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      {/* Tour Info */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={imageSrc}
                            alt={tour?.title || "Tour image"}
                            className="h-12 w-12 rounded-lg object-cover border border-slate-200 dark:border-slate-700"
                          />
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-slate-100">
                              {tour?.title || "Untitled Tour"}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <MapPin className="h-3 w-3" />
                              {tour?.location || "N/A"}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Booking Date */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-slate-900 dark:text-slate-200">
                          {new Date(booking.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="text-xs text-slate-400">
                          ID: ...{booking._id.slice(-6)}
                        </div>
                      </td>

                      {/* Guests */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1 font-medium text-slate-900 dark:text-slate-200">
                          <Users className="h-4 w-4 text-slate-400" />
                          {booking.guestCount} {booking.guestCount > 1 ? "Guests" : "Guest"}
                        </div>
                      </td>

                      {/* Total Cost */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          BDT {totalCost.toLocaleString()}
                        </div>
                        <div className="text-xs text-slate-400">
                          BDT {tour?.costFrom} / person
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {booking.status === "COMPLETE" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                            <CheckCircle2 className="h-3 w-3" />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
                            <Clock className="h-3 w-3" />
                            Pending
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            title="View Details"
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            title="Payment Reference"
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                          >
                            <CreditCard className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No bookings found matching the selected criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}