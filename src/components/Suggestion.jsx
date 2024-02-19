import React, { useEffect, useState } from "react";
import chatbot from "../assets/chatbot.png";
import { dataInfo } from "../api/Gemini";
import { data } from "autoprefixer";
import SquareLoader from "./SquareLoader";

function Suggestion({ resultData }) {
  //from result data i have to extract all the column name and data and make a api call
  const featureList = [];
  const [geminiResp, setGeminiResp] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Object.keys(resultData.categorical).length > 0 &&
      Object.keys(resultData.categorical).forEach((c) => {
        featureList.push(resultData.categorical[c].feature);
      });

    Object.keys(resultData.continous).length > 0 &&
      Object.keys(resultData.continous).forEach((c) => {
        featureList.push(resultData.continous[c].feature);
      });

    featureList.length > 0 &&
      dataInfo
        .featuresInfo(featureList)
        .then((resp) => {
          setGeminiResp(resp.text());
          setLoading(false);
          console.log(resp.text());
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
  }, [resultData]);

  return (
    <div className="p-3 sm:w-11/12 rounded-xl">
      {" "}
      {loading == true ? (
        <div className="w-full flex items-center justify-center flex-col">
          <span className=" mt-[100px]"> Generating AI Report </span>{" "}
          <SquareLoader />
        </div>
      ) : (
        <div className="w-full rounded-xl bg-gray-950 sm:p-3">
          <div className="heading flex space-x-3 justify-start font-semibold  items-center">
            <img src={chatbot} alt="" className="w-[60px]" />
            <p className="text-[26px]"> AI Suggestion for You </p>{" "}
          </div>{" "}
          <p className="w-full p-3">
            {" "}
            {geminiResp && (
              <div dangerouslySetInnerHTML={{ __html: geminiResp }} />
            )}{" "}
          </p>{" "}
        </div>
      )}{" "}
    </div>
  );
}

export default Suggestion;
