import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartDensity({ data }) {
  
  const frequencyDistribution = {};
  data.forEach((value) => {
    frequencyDistribution[value] = (frequencyDistribution[value] || 0) + 1;
  });

  // Step 2: Prepare Data for Recharts
  const plotData = Object.entries(frequencyDistribution).map(([value, frequency]) => ({
    x: value,
    y: frequency / data.length, // Calculate probability (frequency / total count)
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={plotData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="y" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default ChartDensity;
