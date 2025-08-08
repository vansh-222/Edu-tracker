import React, { useEffect } from "react";
import Header from "../components/joinedGroups/Header";
import NextSession from "../components/joinedGroups/NextSession";
import ActivityChart from "../components/joinedGroups/ActivityChart";
import ProgressChart from "../components/joinedGroups/ProgressChart";
import Members from "../components/joinedGroups/Members";
import Tasks from "../components/joinedGroups/Tasks";
import Resources from "../components/joinedGroups/Resources";
import SideButtons from "../components/joinedGroups/SideButtons";
import '../components/joinedGroups/JoinedGroup.css';

export default function JoinedGroup() {
  useEffect(() => {
    // Set userId only if not already present in localStorage
    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", "688921b7f34d4a33921e0f90");
    }
  }, []);

  return (
    <>
      <Header />

      <div className="layout">
        <div className="left-panel">
          <NextSession />
          <br />
          <Members />
        </div>

        <div className="center-panel">
          <div className="top-row">
            <ActivityChart />
            <ProgressChart />
          </div>

          <div className="bottom-row">
            <Tasks />
            <Resources />
          </div>
        </div>

        <div className="right-panel">
          <SideButtons />
        </div>
      </div>
    </>
  );
}
