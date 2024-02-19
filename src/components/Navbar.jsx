import React from "react";
import { Link } from "react-router-dom";
import CircularText from "./CircularText";

function Navbar() {
  return (
    <>
      <div className="w-full sm:px-5 py-3 px-3  justify-between items-center flex fixed top-0 bg-black">
        <div className="logo sm:text-[25px] text-[20px] font-bold text-primary">
          Visualizer
          <span className="text-[12px] ml-[2px] text-white"> beta 1.0 </span>{" "}
        </div>
        <div className="right flex space-x-3 font-semibold mr-5 text-[13px] sm:text-[16px]">
          <Link to={"/home"} className="hover:text-blue-500">
            Home
          </Link>
          <Link to={"/about"}> AboutMe </Link>
      
        </div>
      </div>
    </>
  );
}

export default Navbar;
