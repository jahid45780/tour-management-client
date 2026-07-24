/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTourStatsQuery } from "@/redux/features/tour/tourStats/tourStats.api";

import {
  Map,
  DollarSign,
  Trophy,
  MapPinned,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Loading from "@/components/shared/Loading";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
];

const ToursStats = () => {
  const { data, isLoading } = useTourStatsQuery(undefined);

  if (isLoading) {
    return <Loading/>
  }

  const stats = data;

  const totalTours = stats?.totalTour || 0;

  const avgCost = stats?.avgTourCost?.[0]?.avgCostFrom || 0;

  const highestBooked = stats?.totalHighestBookedTour?.[0];

  const tourTypeData =
    stats?.totalTourByTourType?.map((item: any) => ({
      name: item._id,
      value: item.count,
    })) || [];

  const divisionData =
    stats?.totalTourByDivision?.map((item: any) => ({
      name: item._id,
      value: item.count,
    })) || [];

  const bookedTourData =
    stats?.totalHighestBookedTour?.map((item: any) => ({
      name: item.tour.title,
      bookings: item.bookingCount,
    })) || [];

  return (
    <div className="space-y-8 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Tour Analytics</h1>
        <p className="text-muted-foreground">
          Overview of your tour performance
        </p>
      </div>

      {/* ================= STAT CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">Total Tours</p>
              <h2 className="text-4xl font-bold mt-2">{totalTours}</h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-full">
              <Map className="text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">Average Cost</p>

              <h2 className="text-4xl font-bold mt-2">
                ${avgCost}
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Highest Bookings
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {highestBooked?.bookingCount || 0}
              </h2>
            </div>

            <div className="bg-yellow-100 p-3 rounded-full">
              <Trophy className="text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-muted-foreground">
                Top Tour
              </p>

              <h2 className="font-bold text-lg mt-2 line-clamp-2">
                {highestBooked?.tour?.title || "N/A"}
              </h2>
            </div>

            <div className="bg-purple-100 p-3 rounded-full">
              <MapPinned className="text-purple-600" />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* ================= CHARTS ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Tour Type */}

        <Card>
          <CardContent className="p-6">

            <h2 className="text-xl font-semibold mb-5">
              Tours By Type
            </h2>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={tourTypeData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {tourTypeData.map((_: any, index: number) => (
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

          </CardContent>
        </Card>

        {/* Division */}

        <Card>
          <CardContent className="p-6">

            <h2 className="text-xl font-semibold mb-5">
              Tours By Division
            </h2>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>

                <Pie
                  data={divisionData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {divisionData.map((_: any, index: number) => (
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

          </CardContent>
        </Card>

      </div>

      {/* ================= BAR CHART ================= */}

      <Card>

        <CardContent className="p-6">

          <h2 className="text-xl font-semibold mb-6">
            Most Booked Tours
          </h2>

          <ResponsiveContainer width="100%" height={400}>

            <BarChart data={bookedTourData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="name"
                angle={-15}
                textAnchor="end"
                interval={0}
                height={80}
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="bookings"
                radius={[8, 8, 0, 0]}
                fill="#3B82F6"
              />

            </BarChart>

          </ResponsiveContainer>

        </CardContent>

      </Card>

      {/* ================= TOP BOOKED LIST ================= */}

      <Card>

        <CardContent className="p-6">

          <h2 className="text-xl font-semibold mb-5">
            Top Booked Tours
          </h2>

          <div className="space-y-4">

            {stats?.totalHighestBookedTour?.map((tour: any, index: number) => (
              <div
                key={tour._id}
                className="flex justify-between items-center border rounded-lg p-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {index + 1}. {tour.tour.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {tour.tour.slug}
                  </p>
                </div>

                <Badge className="text-base px-4 py-2">
                  {tour.bookingCount} Bookings
                </Badge>
              </div>
            ))}

          </div>

        </CardContent>

      </Card>

    </div>
  );
};

export default ToursStats;