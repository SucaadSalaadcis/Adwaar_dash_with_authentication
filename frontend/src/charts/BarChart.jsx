import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <>
    <h1 className='font-semibold text-3xl ml-6 mt-4'>Charts</h1>
      <Bar data={chartData} />
    </>

  )
}

export default BarChart;
