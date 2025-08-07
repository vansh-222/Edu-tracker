import React, { useState } from 'react';
import './styles/NewGroupModal.css';

function NewGroupModal({ onClose, onCreate }) {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim() !== '') {
      onCreate(groupName);
      setGroupName('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewGroupModal;
