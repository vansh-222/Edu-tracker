import React, { useEffect, useState } from "react";

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/members");
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };

    fetchMembers();
  }, []);

  function calculateAverage(progress) {
    if (!Array.isArray(progress) || progress.length === 0) return 0;
    const total = progress.reduce((sum, item) => sum + item.percent, 0);
    return Math.round(total / progress.length);
  }

  return (
    <div className="card" style={{ flex: 1 }}>
      <h3>Members ({members.length})</h3>
      {members.map((m, i) => (
        <div key={i} className="member-row">
          <span>{m.name}</span>
          <div className="progress-bar">
            <div
              style={{
                width: `${calculateAverage(m.progress)}%`,
                background: "#10b981",
                height: "8px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
