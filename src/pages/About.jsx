import React from "react";
import AboutProject from "../components/AboutProject";
import AboutMe from "../components/AboutMe";

function About() {
  return <div className="w-full mt-[100px]  justify-center items-center flex flex-col"> 
     <div className="about-me flex  sm:w-9/12  p-5 ">
     <AboutProject/>
     </div>
     <div className="about-me flex  sm:w-9/12  p-5 ">
     <AboutMe/>
     </div>
  </div>;
}

export default About;
