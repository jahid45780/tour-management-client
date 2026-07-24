/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

import {
    Users,
    CalendarDays,
    UserRound,
    CheckCircle2,
    Clock3,
    Hotel,
} from "lucide-react";


import Loading from "@/components/shared/Loading";
import { useBookingStatsQuery } from "@/redux/features/stats/booking/booking.api";

const COLORS = ["#3B82F6", "#10B981", "#F97316", "#EF4444"];

const BookingStats = () => {
      const { data, isLoading } = useBookingStatsQuery(undefined);

    if (isLoading) return <Loading />;

    const stats = data;

    const statusData = stats.totalBookingByStatus;

    const tourData = stats.bookingsPerTour.map((item: any) => ({
        name: item.tour.title,
        bookings: item.bookingCount,
    }));

    const completed =
        statusData.find((i: any) => i._id === "COMPLETE")?.count || 0;

    const pending =
        statusData.find((i: any) => i._id === "PENDING")?.count || 0;

    const cards = [
        {
            title: "Total Booking",
            value: stats.totalBooking,
            icon: CalendarDays,
            color: "bg-blue-500",
        },
        {
            title: "Unique Users",
            value: stats.totalBookingByUniqueUsers,
            icon: Users,
            color: "bg-green-500",
        },
        {
            title: "Avg Guests",
            value: stats.avgGuestCountPerBooking[0].avgGuestCount.toFixed(1),
            icon: UserRound,
            color: "bg-purple-500",
        },
        {
            title: "Completed",
            value: completed,
            icon: CheckCircle2,
            color: "bg-emerald-500",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            color: "bg-yellow-500",
        },
        {
            title: "Last 30 Days",
            value: stats.bookingsLast30Days,
            icon: Hotel,
            color: "bg-red-500",
        },
    ];
    return (
        <div>
         <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold">
                    Booking Analytics
                </h1>

                <p className="text-gray-500">
                    Monitor all booking activities.
                </p>
            </div>

            {/* Stat Cards */}

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {cards.map((card, i) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={i}
                            className="rounded-xl border bg-white text-black p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex justify-between">

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        {card.title}
                                    </p>

                                    <h2 className="mt-2 text-3xl font-bold">
                                        {card.value}
                                    </h2>

                                </div>

                                <div
                                    className={`${card.color} h-14 w-14 rounded-xl flex items-center justify-center`}
                                >
                                    <Icon className="text-white" />
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}

            <div className="grid lg:grid-cols-2 gap-6 ">

                {/* Pie */}

                <div className="rounded-xl border bg-white p-5 shadow-sm">

                    <h2 className="text-xl font-semibold mb-5">
                        Booking Status
                    </h2>

                    <ResponsiveContainer width="100%" height={350}>

                        <PieChart>

                            <Pie
                                data={statusData}
                                dataKey="count"
                                nameKey="_id"
                                outerRadius={120}
                                label
                            >
                                {statusData.map((_: any, index: number) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                {/* Bar */}

                <div className="rounded-xl border bg-white p-5 shadow-sm">

                    <h2 className="text-xl font-semibold mb-5">
                        Bookings Per Tour
                    </h2>

                    <ResponsiveContainer width="100%" height={350}>

                        <BarChart data={tourData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" hide />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="bookings"
                                fill="#3B82F6"
                                radius={[8, 8, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>
            </div>

            {/* Table */}

            <div className="rounded-xl border bg-white p-5 shadow-sm">

                <h2 className="text-xl font-semibold mb-5">
                    Top Booked Tours
                </h2>

                <div className="overflow-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="text-left py-3">
                                    Tour
                                </th>

                                <th className="text-left">
                                    Slug
                                </th>

                                <th className="text-center">
                                    Bookings
                                </th>

                            </tr>

                        </thead>
<tbody>
  {stats.bookingsPerTour.map((tour: any, index: number) => (
    <tr
      key={tour._id}
      className="group border-b last:border-none transition-all duration-300 hover:bg-slate-50"
    >
      {/* Tour */}
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
            {index + 1}
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
              {tour.tour.title}
            </h3>

            <p className="text-xs text-slate-500">
              Tour Package
            </p>
          </div>
        </div>
      </td>

      {/* Slug */}
      <td className="py-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {tour.tour.slug}
        </span>
      </td>

      {/* Booking Count */}
      <td className="py-4 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700">
          {tour.bookingCount} Bookings
        </span>
      </td>
    </tr>
  ))}
</tbody>

                    </table>

                </div>

            </div>

        </div>
        </div>
    );
};

export default BookingStats;