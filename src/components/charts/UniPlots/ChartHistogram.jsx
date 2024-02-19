import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function ChartHistogram({ data, bins }) {
    const histogramData = [];
    const binSize = (Math.max(...data) - Math.min(...data)) / bins;
    for (let i = 0; i < bins; i++) {
        const binStart = Math.min(...data) + i * binSize;
        const binEnd = Math.min(...data) + (i + 1) * binSize;
        const frequency = data.filter(
            (value) => value >= binStart && value < binEnd
        ).length;
        histogramData.push({
            bin: `${binStart.toFixed(2)}-${binEnd.toFixed(2)}`,
            frequency,
        });
    }

    return ( <
        div className = "w-full h-[300px]" >
        <
        ResponsiveContainer width = "100%"
        height = "100%" >
        <
        BarChart width = { 500 }
        height = { 300 }
        data = { histogramData }

        >

        <
        XAxis dataKey = "bin" / >
        <
        YAxis / >
        <
        Tooltip / >
        <
        Legend / >
        <
        Bar dataKey = "frequency"
        fill = "#0366b4" / >
        <
        /BarChart> <
        /ResponsiveContainer> <
        /div>
    );
}

export default ChartHistogram;