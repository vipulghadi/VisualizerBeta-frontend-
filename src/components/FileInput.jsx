import React from "react";
import csv from "../assets/csv.png";
import excel from "../assets/excel.png";
import upload from "../assets/upload.png";
import { toast } from "react-toastify";
function FileInput({file,setFile,setSuccess}) {

  const handleFileChange = (event) => {
   
    setSuccess(false)
    const fileName=(event.target.files[0].name)
    const ext=fileName.split(".").pop()
    if(ext==="csv" || ext==="xlsx"){
      setFile(event.target.files[0])
      console.log(file);
      console.log("here");
    }
    else{
      toast.error("invalid filetype")
    }
   
  };
  return (
    <div className="w-full sm:p-5 p-5  rounded-md text-primary bg-gray-950 text-white  " >
      <div className="images flex space-x-3">
        <img src={csv} alt="" className="w-[30px] sm:w-[40px]" />
        <img src={excel} alt="" className="w-[30px] sm:w-[40px]" />
        <p className="text-white font-semibold">
          Please Enter valid csv or excel FILE...
        </p>
      </div>
      <div className="upload flex justify-center items-center flex-col mt-[10px]">
        <img src={upload} alt="" className="w-[60px] animate-bounce" />
        
        <input type="file" id="upload-file" className="hidden"   onChange={(e)=>{
          handleFileChange(e)
        }} />
        <label htmlFor="upload-file"  className="cursor-pointer font-semibold">click here to upload</label>
       
      </div>
    </div>
  );
}

export default FileInput;
