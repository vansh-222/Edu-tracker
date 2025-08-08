import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        Edu<span>Track</span>
      </div>
      <nav className="nav">
        <button className="nav-button active">Dashboard</button>
        <button className="nav-button">Subjects</button>
        <button className="nav-button">My Groups</button>
        <button className="nav-button">My Activities</button>
        <button className="nav-button">Settings</button>
      </nav>
      <div className="logout-button" title="Logout">
        <span>&#x21B6;</span>
      </div>
    </div>
  );
}

export default Sidebar;
