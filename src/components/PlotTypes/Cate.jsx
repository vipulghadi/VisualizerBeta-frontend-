import React from "react";
import { useState } from "react";

import CategoricalBarChart from "../charts/CategoricalPlots/CategoricalBarChart";

function Cate({ data }) {
  const [cateData, setCateData] = useState(data);

  const [currentFeature, setCurrentFeature] = useState(
    cateData && cateData[Object.keys(cateData)[0]].feature
  );

  const pltOptions = ["bar"];

  const [currentPlot, setCurrentPlot] = useState(pltOptions[0]);

  return (
    <div className="w-full  p-3">
      <div className="options flex space-x-2">
        <div className="feature  space-x-2">
          <span className="font-semibold"> Feature </span>
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentFeature}
            onChange={(e) => {
              setCurrentFeature(e.target.value);
            }}
          >
            {cateData &&
              Object.keys(cateData).map((f) => {
                return (
                  <option value={cateData[f].feature}>
                    {cateData[f].feature}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="plot space-x-2">
          <span className="font-semibold"> Plot </span>
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentPlot}
            onChange={(e) => {
              setCurrentPlot(e.target.value);
            }}
          >
            {pltOptions &&
              pltOptions.map((p) => {
                return <option value={p}> {p} </option>;
              })}
          </select>
        </div>
      </div>
      <div className="plot w-full">
              
        {cateData && currentFeature && currentPlot && (
          <>
            {currentPlot === "bar" && (
              <CategoricalBarChart
                myData={cateData[currentFeature].values}
                feature={currentFeature}
              />
            )}
         
          </>
        )}
      </div>
    </div>
  );
}

export default Cate;
