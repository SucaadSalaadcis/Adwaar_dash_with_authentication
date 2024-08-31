import { useState } from "react";
import "../App.css";
import BarChart from "../charts/BarChart";
import Chart from 'chart.js/auto';

import { UserData } from "./data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PolarAreaChart from "./PolarAreaChart";

function AllCharts() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)", // sky blue
          "#ecf0f1", // white
          "#50AF95", // cagaar
          "purple", // orange
          "#2a71d0", // blue
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <>
    <div className="flex">
      <div style={{ width: 400 }} className="ml-6 mt-6">
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 500 }} className="ml-10 mt-6">
        <LineChart chartData={userData} />
      </div>
    </div>
    {/*  */}
    <div className="flex">

    <div style={{ width: 450 }} className="ml-6 mt-20">
        <PieChart chartData={userData} />
      </div>
    <div style={{ width: 450 }} className="ml-10 mt-20">
        <PolarAreaChart chartData={userData} />
      </div>
    </div>
    </>
  );
}

export default AllCharts;
