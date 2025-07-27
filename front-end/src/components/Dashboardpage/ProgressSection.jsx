import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
);

const ProgressSection = () => {
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Activity",
                data: [20, 30, 45, 50, 60, 75],
                fill: false,
                borderColor: "#a678f1",
                tension: 0.4,
                pointBackgroundColor: "#a678f1",
            },
        ],
    };

    const doughnutData = {
        datasets: [
            {
                data: [78, 22],
                backgroundColor: ["#a678f1", "#e0e0e0"],
                borderWidth: 0,
            },
        ],
    };

    const doughnutOptions = {
        cutout: "70%",
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
    };

   return (
  <div className="progress-section">
    <div className="progress-container">
      <h2 className="section-title">My Progress</h2>
      <div className="progress-grid">
        {/* Activity Line Chart */}
        <div className="activity-chart card">
          <Line data={lineData} />
        </div>

        {/* Progress Donut */}
        <div className="progress-donut card">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="progress-center">78%</div>
        </div>

        <div className="info-cards">
          <div className="info-card card">
            <div className="icon-wrapper purple">
              <i className="user-icon" />
            </div>
            <div>
              <p className="info-title">Geep in</p>
              <p className="info-value">6</p>
            </div>
          </div>

          <div className="info-card card">
            <div className="icon-wrapper orange">
              <i className="grid-icon" />
            </div>
            <div>
              <p className="info-title">Jehed kh</p>
              <p className="info-value">3/0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default ProgressSection;
