import React, { useState } from 'react';
import '../styles/CreateGroupModal.css';

const CreateGroupModal = ({ onClose, onGroupCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maxMembers, setMaxMembers] = useState('');

  const handleCreate = async () => {
    if (!name || !description || !maxMembers) {
      alert("❌ Please fill all the fields");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, maxMembers }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server error:", data);
        throw new Error(data.error || "Group creation failed");
      }

      if (onGroupCreated) onGroupCreated(data);
      onClose();
    } catch (error) {
      console.error('❌ Error creating group:', error);
      alert("❌ Something went wrong while creating the group");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Group</h2>

        <input
          type="text"
          placeholder="Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Members"
          value={maxMembers}
          onChange={(e) => setMaxMembers(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={handleCreate} className="create-btn">Create</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
