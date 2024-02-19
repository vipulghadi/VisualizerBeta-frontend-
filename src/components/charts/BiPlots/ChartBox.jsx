import React from 'react';
import { Line, Rectangle, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, ScatterChart } from 'recharts';

function ChartBox({dataX,dataY,feature1,feature2}) {
    const calculateQuartiles = (data) => {
    const sortedData = data.sort((a, b) => a - b);
    const q1 = sortedData[Math.floor(sortedData.length / 4)];
    const median = sortedData[Math.floor(sortedData.length / 2)];
    const q3 = sortedData[Math.floor((3 * sortedData.length) / 4)];
    return { q1, median, q3 };
  };

  // Calculate quartiles for each dataset
  const quartilesX = calculateQuartiles(dataX);
  const quartilesY = calculateQuartiles(dataY);

  // Calculate min and max values for whiskers
  const minMaxX = [Math.min(...dataX), Math.max(...dataX)];
  const minMaxY = [Math.min(...dataY), Math.max(...dataY)];

  return (
    <div className='w-full h-[300px]'>
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="value" />
        <YAxis type="category" dataKey="axis" />
        <Tooltip />
        <Legend />
        <Line data={[{ axis: 'X', value: quartilesX.median }, { axis: 'Y', value: quartilesY.median }]} />
        <Rectangle
          x={quartilesX.q1}
          width={quartilesX.q3 - quartilesX.q1}
          y={'X'}
          height={0.2}
          fill="#8884d8"
        />
        <Rectangle
          x={quartilesY.q1}
          width={quartilesY.q3 - quartilesY.q1}
          y={'Y'}
          height={0.2}
          fill="#82ca9d"
        />
        <Line
          data={[{ axis: 'X', value: minMaxX[0] }, { axis: 'X', value: minMaxX[1] }]}
          stroke="#ff7300"
          strokeWidth={2}
        />
        <Line
          data={[{ axis: 'Y', value: minMaxY[0] }, { axis: 'Y', value: minMaxY[1] }]}
          stroke="#ff7300"
          strokeWidth={2}
        />
      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
}

export default ChartBox;
