import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchAllProgress = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/members"); // 👈 endpoint returning all members
        const members = res.data;

        let totalPercent = 0;
        let totalTasks = 0;

        members.forEach((member) => {
          if (member.progress && member.progress.length > 0) {
            member.progress.forEach((task) => {
              totalPercent += task.percent || 0;
              totalTasks += 1;
            });
          }
        });

        const avg = totalTasks === 0 ? 0 : totalPercent / totalTasks;
        setProgress(Math.round(avg));
      } catch (err) {
        console.error("Progress fetch error:", err);
        setProgress(0); // fallback
      }
    };

    fetchAllProgress();
  }, []);

  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
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
      <h3>Team Progress</h3>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressChart;
