import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "../styles/TopNavbar.css";

function TopNavbar() {
  return (
    <div className="top-navbar">

      <div className="top-line">
        <div className="title-section">
          <h1 className="navbar-title">My Joined Groups</h1>
          <span className="active-groups">6 Active Groups</span>
        </div>

        <div className="navbar-icons">
          <FiSearch className="icon" />
          <FaBell className="icon" />   
          <FaUserCircle className="profile-icon" />
        </div>

      </div>


      <div className="bottom-line">
        <button className="create-btn">Create New Group</button>
        <select className="dropdown">
          <option>Recently Active</option>
          <option>Most Members</option>
        </select>
      </div>
    </div>
  );
}

export default TopNavbar;

