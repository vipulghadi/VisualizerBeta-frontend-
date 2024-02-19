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
  Label,
} from "recharts";

function ChartLineBi({ dataX, dataY, feature1, feature2 }) {
  const plotData = dataX.map((valueX, index) => ({
    x: valueX,
    y: dataY[index],
  }));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={plotData}>
          <XAxis dataKey="x" label={feature1} dy={20} />{" "}
          <YAxis>
            <Label
              value={feature2}
              position="insideLeft"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />{" "}
          </YAxis>{" "}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#0366b4" />
        </LineChart>{" "}
      </ResponsiveContainer>{" "}
    </div>
  );
}

export default ChartLineBi;
