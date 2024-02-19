import React, { useEffect, useState } from "react";
import Uni from "./PlotTypes/Uni";
import Bi from "./PlotTypes/Bi";
import Cate from "./PlotTypes/Cate";
function ChartSection({ resultData }) {
  return (
  
    <div className="w-full p-2 bg-[#030712] rounded-md">
      <div>
        {/* displaying continous data : univarient analysyis*/}
        {Object.keys(resultData.continous).length > 0 && (
          <Uni data={resultData.continous} />
        )}
      </div>
    {/* displaying continous data : bivarient analysyis*/}
      <div className="mt-[20px]">
      
      {Object.keys(resultData.continous).length > 0 && (
        <Bi data={resultData.continous} />
      )}
    </div>
    {/* displaying categorical data : univarient analysyis*/}
    <div className="mt-[20px] categorical single">
      {Object.keys(resultData.categorical).length > 0 && (
        <Cate data={resultData.categorical} />
      )}
      
    </div>

    </div>
  );
}

export default ChartSection;
