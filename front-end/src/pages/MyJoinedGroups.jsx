import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import GroupsGrid from "../components/GroupsGrid";
import "../styles/MyJoinedGroups.css";

export default function MyJoinedGroups() {
  const [groups, setGroups] = useState([]);

  // ✅ Fetch groups from backend
  const fetchGroups = () => {
    fetch("http://localhost:5000/api/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.error("Error fetching groups:", err));
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  // ✅ Handle Join
  const handleJoin = async (groupId) => {
    try {
      const res = await fetch("http://localhost:5000/api/groups/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groupId }),
      });

      const data = await res.json();
      alert(data.message || "Joined group!");
      fetchGroups(); // ✅ Refresh members count
    } catch (err) {
      console.error("Join error:", err);
    }
  };

  return (
    <div className="myjoined-container">
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <div className="groups-section">
          <h2 className="section-title">My Joined Groups</h2>
          <GroupsGrid groups={groups} onJoin={handleJoin} />
        </div>
      </div>
    </div>
  );
}
