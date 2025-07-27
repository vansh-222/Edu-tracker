import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <button className="circle-btn">←</button>
        <div style={{ marginLeft: "12px" }}>
          <h1 className="title">DSA <span>Squad</span></h1>
          <p className="mentor">Mentor: Anmol Saini</p>
        </div>
      </div>

      <div className="right-icons">
        <button className="circle-btn">🔔</button>

        {/* ✅ Avatar Dropdown with Wrapper */}
        <div className="avatar-dropdown-wrapper">
          <button className="circle-btn">👤</button>
          <div className="dropdown-menu">
            <div>My Profile</div>
            <div>Settings</div>
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
