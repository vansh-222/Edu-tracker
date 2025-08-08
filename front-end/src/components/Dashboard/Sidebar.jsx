import React from "react";

import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        Edu<span>Track</span>
      </div>
      <nav className="nav">
        <button className="nav-button active">Dashboard</button>
        <button className="nav-button"><Link to="/subject">
            Subject
          </Link></button>
        <button className="nav-button"><Link to="/GroupsPage" >
            My Groups
          </Link></button>
        <button className="nav-button"><Link to="/joined" >
            My Joined Group
          </Link></button>
        <button className="nav-button">Settings</button>
      </nav>
      <div className="logout-button" title="Logout">
        <span>&#x21B6;</span>
      </div>
    </div>
  );
}

export default Sidebar;