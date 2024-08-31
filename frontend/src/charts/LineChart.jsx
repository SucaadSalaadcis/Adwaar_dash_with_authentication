import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return <Line data={chartData}  className="mt-4"/>;
}

export default LineChart;
