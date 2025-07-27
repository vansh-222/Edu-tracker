import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Sidebar from "../components/Dashboardpage/Sidebar";
import Header from "../components/Dashboardpage/Header";
import Welcome from "../components/Dashboardpage/Welcome";
import ProgressSection from "../components/Dashboardpage/ProgressSection";
import Subjects from "../components/Dashboardpage/Subjects";
import Profile from "../components/Dashboardpage/Profile";

import "../components/Dashboardpage/Dashboard.css";


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


