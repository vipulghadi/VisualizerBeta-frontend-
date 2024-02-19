import React from "react";

function ContinousCard({data}) {
  return (
    <div  className="sm:w-[150px]  w-6/12 h-[150px] sm:p-1 p-2 bg-gray-950 rounded-xl box-border sm:mr-4  sm:mb-4 
    mb-2">
      <div className="space-x-3  flex justify-center items-end">
        <span className="text-[18px] font-semibold text-green-500">{data.feature.length>10?data.feature.slice(0,10)+"..":data.feature } </span>
      </div>
      <div className="info p-1 ">
        <p className="flex justify-between font-semibold text-[15px] mb-2">
          <span> Type </span> <span>Continous</span>
        </p>
        <p className="flex justify-between  text-[13px]">
          <span> min value </span> <span>{data.min_value}</span>
        </p>
        <p className="flex justify-between  text-[13px]">
          <span> max value </span> <span>{data.max_value}</span>
        </p>
        <p className="flex justify-between  text-[13px]">
          <span> avg. </span> <span>{data.mean_value}</span>
        </p>
      </div>
    </div>
  );
}

export default ContinousCard;
