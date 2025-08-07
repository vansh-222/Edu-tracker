import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import GroupsGrid from "./components/GroupsGrid";

import "./styles/App.css";

export default function App() {
  const [groups, setGroups] = useState([]);

  const fetchGroups = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/groups");
      const data = await res.json();
      setGroups(data);
    } catch (err) {
      console.error("Error fetching groups:", err);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="right-section">
        <TopNavbar onGroupCreated={(group) => setGroups((prev) => [...prev, group])} />
        <GroupsGrid groups={groups} setGroups={setGroups} />
      </div>
    </div>
  );
}
