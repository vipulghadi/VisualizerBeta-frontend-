import React from "react";
import Tooltip from "./Tooltip";

function CategoryCard({data}) {
   
  return (
    <div className="sm:w-[150px]  w-6/12 h-[150px] sm:p-1 p-2 bg-gray-950 rounded-xl box-border sm:mr-4  sm:mb-4 
      mb-2">
      <div className="space-x-3  flex justify-center items-end">
        <span className="sm:text-[18px] text-[15px] font-semibold text-green-500 ">  
{data.feature.length>10?data.feature.slice(0,10)+"..":data.feature }
        
        </span>
      </div>
      <div className="info p-1 ">
        <p className="flex justify-between font-semibold text-[15px] mb-2">
          <span> Type </span> <span>Categorical</span>
        </p>
        <p className="flex justify-between  text-[13px] ">
          <span> max frq </span> <span>{data.max_frq}</span>
        </p>
        <p className="flex justify-between  text-[13px]">
          <span> min frq </span> <span>{data.min_frq}</span>
        </p>
      
      </div>
    </div>
  );
}

export default CategoryCard;
