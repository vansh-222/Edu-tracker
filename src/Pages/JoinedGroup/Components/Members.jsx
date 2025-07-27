import React from "react";

const members = [
  { name: "Alex Chen", progress: 90 },
  { name: "Sarah Kim", progress: 80 },
  { name: "Mike Johnson", progress: 70 },
];

export default function Members() {
  return (
    <div className="card" style={{ flex: 1 }}>
      <h3>Members ({members.length})</h3>
      {members.map((m, i) => (
        <div key={i} className="member-row">
          <span>{m.name}</span>
          <div className="progress-bar">
            <div style={{ width: `${m.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
