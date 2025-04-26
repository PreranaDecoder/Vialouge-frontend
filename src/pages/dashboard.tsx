// src/pages/dashboard.tsx
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { LayoutGrid } from "lucide-react";
import { UserProfileButton } from "@/components/userProfileButton/userProfileButton";
import { PanelLeft } from "lucide-react";

const statsData = [
  {
    title: "SMS Sent Today",
    value: "6789",
    subtitle: "As on 10 April, 2025 16:20 Hrs",
  },
  {
    title: "Monthly SMS Count",
    value: "16140",
    subtitle: "As on 10 April, 2025 16:20 Hrs",
  },
  {
    title: "Available Credits",
    value: "202567",
    subtitle: "As on 10 April, 2025 16:20 Hrs",
  },
  {
    title: "Total Credits",
    value: "894636",
    subtitle: "Credits Available for April, 2024",
  },
];

const deliveryData = [
  { status: "Requested", value: 255678, percentage: 100 },
  { status: "Rejected", value: 245678, percentage: 96 },
  { status: "Submitted", value: 242678, percentage: 85 },
  { status: "Delivered", value: 244, percentage: 35 },
  { status: "Failed", value: 21, percentage: 15 },
  { status: "Awaited", value: 21, percentage: 15 },
];

const hourlyData = Array.from({ length: 15 }, (_, i) => ({
  time: `${String(i * 2).padStart(2, "0")}:00`,
  delivered: Math.floor(Math.sin(i / 2) * 300 + 800),
  submitted: Math.floor(Math.cos(i / 2) * 200 + 600),
}));

// Extend trendData to include July (210 days: Jan 1 to Jul 30, 2024)
const trendData = Array.from({ length: 210 }, (_, i) => ({
  date: new Date(2024, 0, i + 1),
  delivered: Math.floor(Math.sin(i / 10) * 500 + 1000),
  submitted: Math.floor(Math.cos(i / 10) * 400 + 800),
}));

export const Dashboard = () => {
  // Calculate unique month ticks for the Trend Chart X-axis
  const uniqueMonths = new Set<string>();
  const trendTicks = trendData
    .map((item, index) => {
      const month = new Date(item.date).getMonth();
      const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][
        month
      ];
      if (!uniqueMonths.has(monthName)) {
        uniqueMonths.add(monthName);
        return index;
      }
      return null;
    })
    .filter((tick): tick is number => tick !== null);

  return (
    <div>
      <div className="sticky top-0 z-50">
        <div className="flex justify-between items-center h-16 px-8 bg-white border-b">
          <div className="flex items-center gap-3">
            <PanelLeft className="h-5 w-5" />
          </div>
          <UserProfileButton />
        </div>
      </div>

      <div className="bg-white px-8 py-6 border-b">
        <h1 className="text-2xl font-semibold text-[#09090B]">Dashboard</h1>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="p-6 bg-white">
              <h3 className="text-sm text-gray-500">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 my-2">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400">{stat.subtitle}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-base font-semibold text-[#09090B]">
                  Delivery Summary
                </h2>
                <p className="text-sm text-[#71717A] mt-1.5">10 Apr, 2025</p>
              </div>
              <Select defaultValue="total">
                <SelectTrigger className="w-[120px] h-10 border-[#E4E4E7]">
                  <SelectValue placeholder="Total" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="total">Total</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border-t border-[#F1F5F9] -mx-6 mb-6" />
            <div className="space-y-4">
              {deliveryData.map((item) => (
                <div key={item.status} className="flex items-center">
                  <span className="w-24 text-sm text-[#09090B]">
                    {item.status}
                  </span>
                  <div className="flex-1 relative flex items-center">
                    <div className="flex-grow flex items-center">
                      <div
                        className="h-7 bg-emerald-500 rounded-lg transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                      <span className="ml-2 text-sm text-gray-900">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-base font-semibold text-[#09090B]">
                  Hourly Report
                </h2>
                <p className="text-sm text-[#71717A] mt-1.5">10 April, 2025</p>
              </div>
              <Select defaultValue="campaign">
                <SelectTrigger className="w-[120px] h-10 border-[#E4E4E7]">
                  <SelectValue placeholder="Campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="campaign">Campaign</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#eee"
                    vertical={false}
                    horizontalPoints={[50, 100, 150, 200, 250]}
                  />
                  <XAxis
                    dataKey="time"
                    stroke="#888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickCount={5}
                    interval="preserveStartEnd"
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="delivered"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="submitted"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-white">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-base font-semibold text-[#09090B]">
                Trend Chart
              </h2>
              <p className="text-sm text-[#71717A] mt-1.5">
                Delivery trends for SMS from your account
              </p>
            </div>
            <Select defaultValue="6months">
              <SelectTrigger className="w-[135px] h-10 border-[#E4E4E7]">
                <SelectValue placeholder="Last 6 months" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="3months">Last 3 months</SelectItem>
                <SelectItem value="1month">Last month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-[400px] mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient
                    id="trendDeliveredGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="trendSubmittedGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#eee"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  ticks={trendTicks.map((tick) =>
                    trendData[tick].date.getTime()
                  )} // Convert to timestamps
                  tickFormatter={(timestamp) => {
                    const month = new Date(timestamp).getMonth();
                    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][
                      month
                    ];
                  }}
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                />

                <YAxis
                  stroke="#888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="delivered"
                  stroke="#10b981"
                  fill="url(#trendDeliveredGradient)"
                  strokeWidth={2}
                  fillOpacity={1}
                />
                <Area
                  type="monotone"
                  dataKey="submitted"
                  stroke="#f97316"
                  fill="url(#trendSubmittedGradient)"
                  strokeWidth={2}
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              <span className="text-sm text-gray-600">Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f97316]" />
              <span className="text-sm text-gray-600">Submitted</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
