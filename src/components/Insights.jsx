import React from "react";
import { Icon } from "@iconify/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

const consultationData = [
  { day: "Mon", incoming: 32, answered: 28, expertsOnline: 10 },
  { day: "Tue", incoming: 33, answered: 27, expertsOnline: 10 },
  { day: "Wed", incoming: 38, answered: 32, expertsOnline: 12 },
  { day: "Thu", incoming: 45, answered: 35, expertsOnline: 15 },
  { day: "Fri", incoming: 42, answered: 34, expertsOnline: 12 },
  { day: "Sat", incoming: 44, answered: 35, expertsOnline: 13 },
  { day: "Sun", incoming: 48, answered: 37, expertsOnline: 14 },
];

const comparisonData = [
  {
    period: "This week",
    consultations: 20,
    ordersClosed: 15,
  },
  {
    period: "Last week",
    consultations: 15,
    ordersClosed: 10,
  },
];

const Insights = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white p-4 md:p-6">
      <div className="flex flex-row items-center justify-between w-full mb-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
          Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full">
        {/* Consultation Chart */}
        <div className="lg:col-span-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="mb-4 flex items-center gap-2">
            <Icon
              icon="mage:message-round-fill"
              height={16}
              width={16}
              className="w-4 h-4 text-[#667085]"
            />
            <h3 className="text-gray-600 text-sm font-medium">CONSULTATIONS</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={consultationData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f0f0f0"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: "12px", fill: "#666" }}
                  dy={10}
                />

                <YAxis
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: "12px", fill: "#666" }}
                  domain={[0, 60]}
                  ticks={[0, 10, 20, 30, 40, 50, 60]}
                />

                <YAxis
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 20]}
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: "12px", fill: "#666" }}
                  ticks={[0, 5, 10, 15, 20]}
                />

                <Tooltip
                  cursor={false}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #f0f0f0",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                />

                <Legend
                  align="left"
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  iconSize={8}
                />

                <Bar
                  yAxisId="right"
                  dataKey="expertsOnline"
                  fill="#FFF3C6"
                  name="Experts online"
                  barSize={45}
                  radius={[0, 0, 0, 0]}
                  zIndex={1}
                />

                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="incoming"
                  stroke="#8A94A6"
                  strokeWidth={2}
                  dot={false}
                  name="Incoming"
                  strokeDasharray="5 5"
                  zIndex={2}
                />

                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="answered"
                  stroke="#15B79F"
                  strokeWidth={2}
                  dot={false}
                  name="Answered"
                  zIndex={2}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* VS Past Period Chart */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="mb-4 flex items-center gap-2">
            <Icon
              icon="entypo:bar-graph"
              height={16}
              width={16}
              className="w-4 h-4 text-[#667085]"
            />
            <h3 className="text-gray-600 text-sm font-medium">
              VS PAST PERIOD
            </h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} barGap={0}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="period"
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: "12px" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  style={{ fontSize: "12px" }}
                />
                <Tooltip />
                <Legend align="left" verticalAlign="bottom" height={36} />
                <Bar
                  dataKey="consultations"
                  fill="#CCFBEF"
                  name="Consultations"
                  radius={[4, 4, 0, 0]}
                  barSize={45}
                />
                <Bar
                  dataKey="ordersClosed"
                  fill="#134E48"
                  name="Orders closed"
                  radius={[4, 4, 0, 0]}
                  barSize={45}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Forecasts Card */}
        <div className="lg:col-span-3 rounded-2xl p-6 text-white bg-gradient-to-b from-[#15B79F] to-[#0E9382]">
          <div className="mb-6 flex  items-center gap-2">
            <Icon
              icon="mage:message-round-fill"
              height={16}
              width={16}
              className="w-4 h-4 text-[#CCFBEF]]"
            />
            <h3 className="text-sm font-medium text-[#CCFBEF]">FORECASTS</h3>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-medium">+15%</span>
                <Icon 
                  icon="material-symbols:trending-up"
                  height={36}
                  width={36}
                  className="w-9 h-9 text-[#CCFBEF]] ml-12"   
                />
              </div>
              <p className="text-sm mt-2 text-white/90">
                forecasted increase in your sales closed by the end of the
                current month
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-medium">+20%</span>
                <Icon 
                  icon="material-symbols:trending-up"
                  height={36}
                  width={36}
                  className="w-9 h-9 text-[#CCFBEF]] ml-12 "   
                />
              </div>
              <p className="text-sm mt-2 text-white/90">
                forecasted increase in consultations by the end of the current
                month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
