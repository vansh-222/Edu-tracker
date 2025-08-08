import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Welcome from "../components/Dashboard/Welcome";
import ProgressSection from "../components/Dashboard/ProgressSection";
import Subjects from "../components/Dashboard/Subjects";
import Profile from "../components/Dashboard/Profile";

import "../components/Dashboard/Dashboard.css";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Welcome />
        <ProgressSection />
        <Subjects />
      </div>
      <div className="dashboard-right-panel">
        <Profile />
      </div>
    </div>
  );
}

export default Dashboard;

