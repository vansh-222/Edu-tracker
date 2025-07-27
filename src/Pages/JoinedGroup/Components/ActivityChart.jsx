import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Activity",
        data: [3, 4, 6, 5, 8, 10],
        backgroundColor: "rgba(123, 97, 255, 0.2)",
        borderColor: "#7b61ff",
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="card" style={{ flex: 1 }}>
      <h3>Activity</h3>
      <Line data={data} options={options} />
    </div>
  );
};
export default ActivityChart;
