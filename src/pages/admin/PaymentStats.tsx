/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePaymentStatsQuery } from "@/redux/features/stats/payment/payment.api";

import {
  CreditCard,
  Wallet,
  CircleDollarSign,
  CheckCircle2,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
import Loading from "@/components/shared/Loading";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

const PaymentStats = () => {
  const { data, isLoading } = usePaymentStatsQuery(undefined);

  if (isLoading) {
    return <Loading/>
  }

  const stats = data;

  const totalPayments = stats?.totalPayment || 0;

  const totalRevenue =
    stats?.totalRevenue?.[0]?.totalRevenue || 0;

  const avgPayment =
    stats?.avgPaymentAmount?.[0]?.avgPaymentAMount || 0;

  const paid =
    stats?.totalPaymentByStatus?.find(
      (item: any) => item._id === "PAID"
    )?.count || 0;

  const unpaid =
    stats?.totalPaymentByStatus?.find(
      (item: any) => item._id === "UNPAID"
    )?.count || 0;

  const paymentStatus =
    stats?.totalPaymentByStatus?.map((item: any) => ({
      name: item._id,
      value: item.count,
    })) || [];

  const gatewayData =
    stats?.paymentGatewayData?.map((item: any) => ({
      name: item._id,
      value: item.count,
    })) || [];

  return (
    <div className="space-y-8 p-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Payment Analytics
        </h1>

        <p className="text-muted-foreground">
          Monitor revenue and payment performance
        </p>
      </div>

      {/* ================= CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <Card>
          <CardContent className="flex justify-between items-center p-6">
            <div>
              <p className="text-muted-foreground">
                Total Payments
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {totalPayments}
              </h2>
            </div>

            <div className="bg-blue-100 rounded-full p-3">
              <CreditCard className="text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex justify-between items-center p-6">
            <div>
              <p className="text-muted-foreground">
                Total Revenue
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ${totalRevenue.toLocaleString()}
              </h2>
            </div>

            <div className="bg-green-100 rounded-full p-3">
              <Wallet className="text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex justify-between items-center p-6">
            <div>
              <p className="text-muted-foreground">
                Average Payment
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ${avgPayment.toFixed(2)}
              </h2>
            </div>

            <div className="bg-yellow-100 rounded-full p-3">
              <CircleDollarSign className="text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex justify-between items-center p-6">
            <div>
              <p className="text-muted-foreground">
                Paid Payments
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {paid}
              </h2>

              <p className="text-sm text-muted-foreground">
                {unpaid} unpaid
              </p>
            </div>

            <div className="bg-emerald-100 rounded-full p-3">
              <CheckCircle2 className="text-emerald-600" />
            </div>
          </CardContent>
        </Card>

      </div>

      {/* ================= PIE CHARTS ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <Card>

          <CardContent className="p-6">

            <h2 className="font-semibold text-xl mb-5">
              Payment Status
            </h2>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>

                <Pie
                  data={paymentStatus}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {paymentStatus.map((_: any, index: number) => (
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

        <Card>

          <CardContent className="p-6">

            <h2 className="font-semibold text-xl mb-5">
              Payment Gateway
            </h2>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>

                <Pie
                  data={gatewayData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  label
                >
                  {gatewayData.map((_: any, index: number) => (
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
            Payment Status Overview
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={paymentStatus}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                radius={[8, 8, 0, 0]}
                fill="#3B82F6"
              />

            </BarChart>
          </ResponsiveContainer>

        </CardContent>

      </Card>

      {/* ================= SUMMARY ================= */}

      <Card>

        <CardContent className="p-6">

          <h2 className="text-xl font-semibold mb-6">
            Payment Summary
          </h2>

          <div className="space-y-4">

            {stats?.totalPaymentByStatus?.map((item: any) => (
              <div
                key={item._id}
                className="flex justify-between items-center border rounded-lg p-4"
              >
                <span className="font-medium">
                  {item._id}
                </span>

                <Badge className="px-4 py-2">
                  {item.count} Payments
                </Badge>
              </div>
            ))}

          </div>

        </CardContent>

      </Card>

    </div>
  );
};

export default PaymentStats;