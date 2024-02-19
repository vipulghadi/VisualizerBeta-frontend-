import React from "react";
import FeatureCard from "./CategoryCard";
import CategoryCard from "./CategoryCard";
import ContinousCard from "./ContinousCard";

function CardSection({ resultData }) {
    return ( <
        div className = "w-full  flex sm:justify-start  justify-evenly   rounded-xl flex-wrap  bg-blue-950 sm:bg-black p-3  " >

        {
            Object.keys(resultData.categorical).length > 0 && Object.keys(resultData.categorical).map((k) => {
                return <CategoryCard data = { resultData.categorical[k] }
                />
            })
        } {
            Object.keys(resultData.continous).length > 0 && Object.keys(resultData.continous).map((k) => {
                return <ContinousCard data = { resultData.continous[k] }
                />
            })
        }

        <
        /div>
    )
}
export default CardSection;