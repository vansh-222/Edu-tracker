import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/GroupsGrid.css';
import CreateGroupModal from './CreateGroupModal';

const GroupsGrid = () => {
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = () => {
    axios.get('http://localhost:5000/api/groups')
      .then(res => {
        const permanentIds = [
          "64db38cda92ffb423c9b5e81",
          "64db38cda92ffb423c9b5e82",
          "64db38cda92ffb423c9b5e83",
          "64db38cda92ffb423c9b5e84",
          "64db38cda92ffb423c9b5e85",
          "64db38cda92ffb423c9b5e86"
        ];

        const initializedGroups = res.data.map(group => ({
          ...group,
          joined: false,
          currentMembers: group.members || 0,
          isPermanent: permanentIds.includes(group._id),
        }));

        setGroups(initializedGroups);
      })
      .catch(err => {
        console.error('Error fetching groups:', err);
      });
  };

  const handleGroupCreated = (newGroup) => {
    const formattedGroup = {
      ...newGroup,
      joined: false,
      currentMembers: 0,
      isPermanent: false,
    };
    setGroups(prev => [...prev, formattedGroup]);
    setShowModal(false);
  };

  const handleJoinLeave = async (index) => {
    const group = groups[index];
    const groupId = group._id;

    try {
      if (!group.joined && group.currentMembers >= group.maxMembers) {
        alert("❌ Group is full!");
        return;
      }

      if (!group.joined) {
        await axios.post(`http://localhost:5000/api/groups/${groupId}/join`);
      } else {
        await axios.post(`http://localhost:5000/api/groups/${groupId}/leave`);
      }

      const updatedGroups = [...groups];
      updatedGroups[index].currentMembers += group.joined ? -1 : 1;
      updatedGroups[index].joined = !group.joined;
      setGroups(updatedGroups);
    } catch (error) {
      console.error("❌ ERROR:", error.response?.data || error.message);
      alert("Error: " + (error.response?.data?.error || error.message));
    }
  };

  const handleDeleteGroup = async (groupId, index) => {
    try {
      await axios.delete(`http://localhost:5000/api/groups/${groupId}`);
      const updatedGroups = [...groups];
      updatedGroups.splice(index, 1);
      setGroups(updatedGroups);
    } catch (error) {
      console.error("❌ Failed to delete group:", error);
      alert(error.response?.data?.error || "Failed to delete group");
    }
  };

  return (
    <div className="groups-container">
      {showModal && (
        <CreateGroupModal
          onClose={() => setShowModal(false)}
          onGroupCreated={handleGroupCreated}
        />
      )}

      <div className="groups-grid">
        {groups.map((group, index) => {
          const totalCapacity = group.maxMembers || 100;
          const progressPercentage = Math.min((group.currentMembers / totalCapacity) * 100, 100);

          return (
            <div key={group._id} className="group-card">
              <h2>{group.name}</h2>
              <p>{group.description}</p>

              <div className="group-details">
                <span>👥 Members: {group.currentMembers} / {group.maxMembers}</span>
              </div>

              <div className="progress-bar-wrapper">
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="button-wrapper">
                <button
                  className={`join-btn ${group.joined ? 'leave' : 'join'}`}
                  onClick={() => handleJoinLeave(index)}
                >
                  {group.joined ? 'Leave' : 'Join'}
                </button>

                {!group.isPermanent && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteGroup(group._id, index)}
                  >
                    🗑️ Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupsGrid;

