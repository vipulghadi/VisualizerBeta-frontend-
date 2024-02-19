import React from "react";
import FileInput from "../components/FileInput";
import CircularText from "../components/CircularText";
import { toast } from "react-toastify";
import { useState } from "react";
import { fileAPI } from "../api/File";
import Loader from "../components/Loader";
import ChartSection from "../components/ChartSection";
import CardSection from "../components/CardSection";
import Suggestion from "../components/Suggestion";

function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState("");
  const [resultData, setResultData] = useState(null);

  function sendRequest() {
    setFileName(file.name);
    setLoading(true);
    fileAPI
      .sendFile(file)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status == "ok") {
          setResultData(resp.data);
          console.log(resultData);
          setSuccess(true);
          toast.success("data loaded");
          setLoading(false);
        } else {
          setLoading(false);
          toast.error("error while processing data");
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("error while processing data");
        console.log(error);
      });
  }
  return (
    <div className="w-full ">
      <div className="w-10/12 mx-auto mt-3"> </div>{" "}
      <div className="file-input-section flex justify-center items-center sm:mt-[100px] mt-[50px]">
        <div className="file-input sm:w-5/12 ] w-11/12 mt-[50px]">
          <FileInput file={file} setFile={setFile} setSuccess={setSuccess} />{" "}
          {file && (
            <div className="check-btn primary mt-2 px-3 py-1 text-white rounded-sm cursor-pointer w-[100px] mx-auto text-center flex justify-center items-center">
              {loading ? (
                <Loader />
              ) : (
                <span onClick={sendRequest}> check </span>
              )}{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
      {success && resultData && (
        <div className="card-section sm:w-11/12 mx-auto w-11/12 p-2 mt-[50px]">
          <p className="font-semibold mb-5 text-[20px]"> Features Overview </p>{" "}
          <CardSection resultData={resultData} />{" "}
        </div>
      )}
      {success && resultData && (
        <div className="chart-section w-full sm:w-11/12 mx-auto  p-3  mt-5 ">
          <p className="text-white text-[20px] font-semibold mb-5 ">
            Analytics Section{" "}
          </p>{" "}
          <ChartSection resultData={resultData} />{" "}
        </div>
      )}{" "}
      {success && resultData && (
        <div className="ai-suggestion w-full flex justify-center items-center mb-5 mt-5">
          <Suggestion resultData={resultData} />{" "}
        </div>
      )}
    </div>
  );
}

export default Home;
