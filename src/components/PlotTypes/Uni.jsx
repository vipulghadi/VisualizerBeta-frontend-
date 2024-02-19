import React from "react";
import { useState } from "react";
import ChartLine from "../charts/UniPlots/ChartLine";
import ChartDensity from "../charts/UniPlots/ChartDensity";
import ChartHistogram from "../charts/UniPlots/ChartHistogram";
import About from "../../pages/About";

function Uni({ data }) {
  const [contiData, setContiData] = useState(data);

  const [currentFeature, setCurrentFeature] = useState(
    contiData && contiData[Object.keys(contiData)[0]].feature
  );

  const pltOptions = ["lineplot", "histogram", "density"];

  const [currentPlot, setCurrentPlot] = useState(pltOptions[0]);

  return (
    <div className="w-full  p-3">
      <div className="options flex space-x-2">
        <div className="feature  space-x-2">
          <span className="font-semibold"> Feature </span>{" "}
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentFeature}
            onChange={(e) => {
              setCurrentFeature(e.target.value);
            }}
          >
            {contiData &&
              Object.keys(contiData).map((f) => {
                return (
                  <option value={contiData[f].feature}>
                    {" "}
                    {contiData[f].feature}{" "}
                  </option>
                );
              })}{" "}
          </select>{" "}
        </div>{" "}
        <div className="plot space-x-2">
          <span className="font-semibold"> Plot </span>{" "}
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
              
        {contiData && currentFeature && currentPlot && (
          <>
            
            {currentPlot === "lineplot" && (
              <ChartLine
                data={contiData[currentFeature].values}
                feature={currentFeature}
              />
            )}
            {currentPlot === "histogram" && (
              <ChartHistogram data={contiData[currentFeature].values} bins={10} />
            )}
            {currentPlot === "density" && (
              <ChartDensity data={contiData[currentFeature].values} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Uni;
