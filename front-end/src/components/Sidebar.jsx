import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger */}
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <h2 className="sidebar-title">
          <span className="edu">Edu</span>
          <span className="track">Track</span>
        </h2>

        <ul className="sidebar-menu">
          <li className="sidebar-item">Dashboard</li>
          <li className="sidebar-item active">My Groups</li>
          <li className="sidebar-item">Assignments</li>
          <li className="sidebar-item">Settings</li>
        </ul>

        <div className="illustration-section">
          <img
            src="/2805-removebg-preview.png"
            alt="Illustration"
            className="sidebar-img"
          />

          <p>Upgrade to PRO for more resources</p>
          <button className="upgrade-btn">Upgrade Now</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
