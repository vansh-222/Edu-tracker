import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <h2>Dashboard</h2>
        <p>Wednesday, 23 July</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search groups, projects, or tasks..."
        />
      </div>
    </div>
  );
}

export default Header;