import React from "react";
import chatbot from '../assets/chatbot.png'
function AboutProject() {
  return   <div className="w-full p-3 bg-[#030712]"> 
  <div className="flex"> <h2 className="font-semibold text-[25px]">About Project</h2><img src={chatbot} alt="" className="w-[40px] ml-2" /></div>
 
  <p className=" mt-2 text-[14px]">The project utilizes Django for backend processing and React for frontend interface. Users upload CSV or Excel files, processed by Django, and stored in a database. Google Gemini is employed for data visualization, generating graphs based on user selections. Data analysis techniques provide insights and suggestions displayed alongside visualizations. Optional features include user authentication and permissions. After testing, the application is deployed to a server for user access. Overall, the project integrates various technologies to enable users to upload files, visualize data, receive suggestions, and gain insights within a user-friendly web interface.</p>
  
  </div>;
}

export default AboutProject;
