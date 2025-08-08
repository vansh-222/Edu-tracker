import React, { useEffect, useState } from "react";
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
import axios from "axios";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ActivityChart = () => {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const fetchGroupTasks = async () => {
      const groupId = localStorage.getItem("groupId");
      if (!groupId) {
        console.warn("Group ID not found in localStorage");
        return;
      }

      try {
        const res = await axios.get(`http://localhost:5000/api/tasks/group/${groupId}`);
        const allTasks = res.data;

        if (!allTasks.length) {
          // 🟡 No real data, use fallback
          setWeekData([
            { week: "Week 30", count: 2 },
            { week: "Week 31", count: 3 },
            { week: "Week 32", count: 5 },
            { week: "Week 33", count: 4 },
            { week: "Week 34", count: 7 },
          ]);
          return;
        }

        const weekCounts = {};
        allTasks.forEach((task) => {
          const createdAt = dayjs(task.createdAt);
          const week = createdAt.week();
          weekCounts[week] = (weekCounts[week] || 0) + 1;
        });

        const sortedWeeks = Object.keys(weekCounts)
          .sort((a, b) => a - b)
          .map((week) => ({
            week: `Week ${week}`,
            count: weekCounts[week],
          }));

        setWeekData(sortedWeeks);
      } catch (error) {
        console.error("Error fetching group tasks:", error);
        // 🛑 If error in API, use fallback
        setWeekData([
          { week: "Week 30", count: 2 },
          { week: "Week 31", count: 3 },
          { week: "Week 32", count: 5 },
          { week: "Week 33", count: 4 },
          { week: "Week 34", count: 7 },
        ]);
      }
    };

    fetchGroupTasks();
  }, []);

  const data = {
    labels: weekData.map((item) => item.week),
    datasets: [
      {
        label: "Total Tasks Completed by Group",
        data: weekData.map((item) => item.count),
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
      <h3>Group Activity</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
