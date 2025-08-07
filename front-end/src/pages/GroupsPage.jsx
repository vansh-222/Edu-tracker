import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import GroupsGrid from "../components/GroupsGrid";
import "../styles/App.css";

export default function GroupsPage() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCreateGroup = () => {
    const newGroup = {
      category: "New Category",
      title: "New Group",
      members: 0,
    };

    fetch("http://localhost:5000/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => setGroups((prev) => [...prev, data]))
      .catch((err) => console.error(err));
  };

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <TopNavbar />
        <GroupsGrid groups={groups} onCreateGroup={handleCreateGroup} />
      </div>
    </div>
  );
}
