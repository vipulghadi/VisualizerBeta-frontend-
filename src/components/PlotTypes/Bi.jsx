import React from "react";
import ChartScatter from "../charts/BiPlots/ChartScatter";
import { useState } from "react";
import ChartLineBi from "../charts/BiPlots/ChartLineBi";
import ChartBox from "../charts/BiPlots/ChartBox";

function Bi({data}) {
const [contiData, setContiData] = useState(data);

const plotOptions = ["scatter","line","boxplot"];
const [currentFeature1, setCurrentFeature1] = useState(contiData[Object.keys(contiData)[0]].feature)
const [currentFeature2, setCurrentFeature2] = useState(
    contiData[Object.keys(contiData)[1]]?contiData[Object.keys(contiData)[1]].feature:contiData[Object.keys(contiData)[0]].feature
)
const [currentPlot,setCurrentPlot]=useState(plotOptions[0])
//setting data to features





  return <div className="w-full p-3 bg-gray-950">
  <div className="options flex space-x-2 flex-wrap">
        <div className="feature1  space-x-2">
          <span className="font-semibold"> Feature1 </span>
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentFeature1}
            onChange={(e) => {
              setCurrentFeature2(e.target.value);
            }}
          >
            {contiData &&
              Object.keys(contiData).map((f) => {
                return (
                  <option value={contiData[f].feature}>
                  
                    {contiData[f].feature}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="feature2  space-x-2">
          <span className="font-semibold"> Feature2 </span>
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentFeature2}
            onChange={(e) => {
              setCurrentFeature2(e.target.value);
            }}
          >
            {contiData &&
              Object.keys(contiData).map((f) => {
                return (
                  <option value={contiData[f].feature}>
                    
                    {contiData[f].feature}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="plot space-x-2">
          <span className="font-semibold"> Plot </span>{" "}
          <select
            className="outline-none p-1 mb-2 rounded-md"
            value={currentPlot}
            onChange={(e) => {
              setCurrentPlot(e.target.value);
            }}
          >
            {plotOptions &&
              plotOptions.map((p) => {
                return <option value={p}> {p} </option>;
              })}
          </select>
        </div>
      </div>
      <div className="plot w-full">
              
              {contiData && currentFeature1 && currentPlot && currentFeature2 && (
                <>
                  
                  {currentPlot === "scatter" && (
                    <ChartScatter
                      dataX={contiData[currentFeature1].values}
                      dataY={contiData[currentFeature2].values}
                      feature1={currentFeature1}
                      feature2={currentFeature2}
                    />
                  )}
                  {currentPlot === "line" && (
                    <ChartLineBi
                      dataX={contiData[currentFeature1].values}
                      dataY={contiData[currentFeature2].values}
                      feature1={currentFeature1}
                      feature2={currentFeature2}
                    />
                  )}

                  {currentPlot === "boxplot" && (
                    <ChartBox
                      dataX={contiData[currentFeature1].values}
                      dataY={contiData[currentFeature2].values}
                      feature1={currentFeature1}
                      feature2={currentFeature2}
                    />
                  )}
                </>
              )}
            </div>



  </div>;
}
export default Bi;
