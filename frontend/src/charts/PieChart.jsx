import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return <Pie data={chartData} className="mt-4" />;
}

export default PieChart;
