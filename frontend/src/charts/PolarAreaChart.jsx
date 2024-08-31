import React from "react";
import { PolarArea } from "react-chartjs-2";

function PolarAreaChart({ chartData }) {
  return <PolarArea data={chartData}  className="mt-4"/>;
}

export default PolarAreaChart;
