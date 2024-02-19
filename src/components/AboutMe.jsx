import React from "react";

import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/instagram.png";

function AboutMe() {
  return (
    <div className="w-full p-3 bg-[#030712]">
      <div className="flex">
        {" "}
        <h2 className="font-semibold text-[25px]"> About Me </h2>{" "}
      </div>{" "}
      <p className=" mt-2 text-[14px]">
        I am a third - year AI and DS student at JEC Jabalpur, interested in
        both frontend and backend development, as well as machine learning with
        a focus on General AI.Continuously seeking to expand my skill set, I am
        dedicated to enhancing my knowledge and expertise in these areas to
        contribute effectively to the field.
      </p>{" "}
      <div className="connecttion flex space-x-2 mt-2">
        <a href="https://www.linkedin.com/in/vipul-ghadi-b4a9ab226/">
          <img src={linkedin} alt="" className="w-[20px]" />
        </a>{" "}
        <a href="whatsapp://send?phone=+918275167036&text=Hello%20there!">
          <img src={whatsapp} alt="" className="w-[20px]" />
        </a>{" "}
        <a href="">
          <img src={insta} alt="" className="w-[20px]" />
        </a>{" "}
      </div>{" "}
    </div>
  );
}

export default AboutMe;
