import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartLine({ data, feature }) {
  const chartData = data.map((value, index) => ({ x: index + 1, y: value }));

  return (
    <div className="w-full h-[300px] sm:p-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart className="" height={200} width={200} data={chartData}>
          <XAxis dataKey="keys" label={feature} dy={10} fill="red" />

          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#0366b4" />
        </LineChart>{" "}
      </ResponsiveContainer>{" "}
    </div>
  );
}
