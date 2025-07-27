import React from "react";

const tasks = [
  { title: "Complete Binary Tree", status: "In Progress", percent: 60 },
  { title: "Graph Algorithms", status: "Pending", percent: 0 },
  { title: "Sorting Problems", status: "Completed", percent: 100 },
];

export default function Tasks() {
  return (
    <div className="card">
      <h3>Tasks</h3>
      {tasks.map((t, i) => (
        <div className="task-row task-card" key={i}>
          <input
            type="checkbox"
            checked={t.status === "Completed"}
            readOnly
          />
          <span className="task-title">{t.title}</span>

          <div className="progress-bar" style={{ width: "120px" }}>
            <div style={{ width: `${t.percent}%` }} />
          </div>

          <span className={`status-badge ${t.status.toLowerCase()}`}>
            {t.status}
          </span>

          <button className="details-btn">Details</button>
        </div>
      ))}
    </div>
  );
}
