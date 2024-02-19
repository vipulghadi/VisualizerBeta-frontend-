import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



function CategoricalBarChart  ({ myData })  {
 

const countFrequency = (array) => {
  return array.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
  const frequencies = countFrequency(myData);

  // Convert frequencies object to an array of objects
  const data = Object.keys(frequencies).map((category) => ({
    category,
    value: frequencies[category],
  }));

  return (
    <div className="w-full h-[300px] sm:p-5">
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart
        data={data}
      
      >
       
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#0366b4" />
      </BarChart>{" "}
    </ResponsiveContainer>
    </div>
  );
};

export default CategoricalBarChart;
