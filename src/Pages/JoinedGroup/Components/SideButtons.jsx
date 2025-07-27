import React from "react";

const buttons = ["Chat", "Announcements", "Leaderboard", "Upload Resource"];

export default function SideButtons() {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {buttons.map((b, i) => (
        <button key={i} className="action-btn">{b}</button>
      ))}
    </div>
  );
}
