import React from "react";
import '../assets/circular-animate.css'

function CircularText({ text }) {
  return (
    <div className="circular-text-container bg-blue-600 text-[14px]  text-white overflow-hidden w-full p-1">
      <div className="circular-text text-nowrap">{text}</div>
    </div>
  );
}
export default CircularText;
