import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = () => {
  const data = {
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#7b61ff", "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: { legend: { display: false } },
  };

  return (
    <div className="card" style={{ width: "200px", position: "relative" }}>
      <h3>Progress</h3>
      <Doughnut data={data} options={options} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        fontWeight: "bold", fontSize: "20px"
      }}>78%</div>
    </div>
  );
};

export default ProgressChart;
