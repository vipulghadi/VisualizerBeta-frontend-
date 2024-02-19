import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";

export default function ChartScatter({ dataX, dataY, feature1, feature2 }) {
  if (dataX.length !== dataY.length) {
    console.error("Arrays must have the same length");
    return null;
  }

  // Prepare data for scatter plot
  const plotData = dataX.map((valueX, index) => ({
    x: valueX,
    y: dataY[index],
  }));

  return (
    <div className="w-full h-[300px] sm:p-5">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" name="X-axis">
            <Label
              value={feature1}
              position="centerBottom"
              dy={10}
              style={{ textAnchor: "start", marginTop: "60px" }}
              className=""
            />
          </XAxis>
          <YAxis type="number" dataKey="y" name="Y-axis">
            <Label
              value={feature2}
              position="insideLeft"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: "3 3" }} /> <Legend />
          <Scatter name={feature1} data={plotData} fill="#0366b4" />
          <Scatter name={feature2} data={plotData} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
