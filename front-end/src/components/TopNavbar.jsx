// TopNavbar.jsx
import React, { useState } from "react";
import "../styles/TopNavbar.css";
import CreateGroupModal from "./CreateGroupModal"; // import modal

const TopNavbar = ({ onGroupCreated }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCreateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="top-navbar">
        <div className="top-line">
          <div className="title-section">
            <h2 className="navbar-title">My Joined Groups</h2>
            <p className="active-groups">Active Groups: 6</p>
          </div>
          <div className="navbar-icons">
            <span className="icon">🔔</span>
            <span className="profile-icon">👤</span>
          </div>
        </div>

        <div className="bottom-line">
          <button className="create-btn" onClick={handleCreateClick}>
            + Create New Group
          </button>
          <select className="dropdown">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Modal appears here */}
      {showModal && (
        <CreateGroupModal
          onClose={handleCloseModal}
          onGroupCreated={(group) => {
            onGroupCreated(group);
            handleCloseModal();
          }}
        />
      )}
    </>
  );
};

export default TopNavbar;
