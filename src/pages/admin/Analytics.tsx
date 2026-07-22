/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetUserStatsQuery } from "@/redux/features/stats/adminStats.api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import UserTable from "./stateTable/StateUserTable";


const COLORS = [
  "#3B82F6", // Blue
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Purple
  "#06B6D4", // Cyan
];


const Analytics = () => {
  const { data, isLoading } = useGetUserStatsQuery();


  if (isLoading) {
    return <p>Loading...</p>;
  }

  const roleData =
    data?.usersByRole?.map((item: any) => ({
      name: item._id,
      value: item.count,
    })) || [];

  const statusData = [
    {
      name: "Active",
      value: data?.totalActiveUsers ?? 0,
    },
    {
      name: "Inactive",
      value: data?.totalInActiveUsers ?? 0,
    },
    {
      name: "Blocked",
      value: data?.totalBlockedUsers ?? 0,
    },
  ];

  return (
    <div>

      <div>
        header
      </div>

      {/* all user table */}

      <div className="m-4" >
        <UserTable/>
      </div>


    {/* this  chart */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

  {/* Users By Role */}
  <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
      <h2 className="text-lg font-bold text-white">
        👥 Users By Role
      </h2>
      <p className="text-blue-100 text-sm mt-1">
        Distribution of registered users
      </p>
    </div>

    {/* Chart */}
    <div className="p-6">
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={roleData}
            dataKey="value"
            nameKey="name"
            innerRadius={65}
            outerRadius={115}
            paddingAngle={4}
            label
          >
            {roleData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={3}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,.15)",
            }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 14,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>



  {/* User Status */}
  <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4">
      <h2 className="text-lg font-bold text-white">
        ✅ User Status
      </h2>
      <p className="text-green-100 text-sm mt-1">
        Active vs Blocked Users
      </p>
    </div>

    {/* Chart */}
    <div className="p-6">
      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={statusData}
            dataKey="value"
            nameKey="name"
            innerRadius={65}
            outerRadius={115}
            paddingAngle={4}
            label
          >
            {statusData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={3}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,.15)",
            }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 14,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>

</div>

</div>
  );
};

export default Analytics;