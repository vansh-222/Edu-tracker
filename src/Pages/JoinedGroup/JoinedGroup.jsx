import React from "react";
import Header from "./Components/Header";
import NextSession from "./Components/NextSession";
import ActivityChart from "./Components/ActivityChart";
import ProgressChart from "./Components/ProgressChart";
import Members from "./Components/Members";
import Tasks from "./Components/Tasks";
import Resources from "./Components/Resources";
import SideButtons from "./Components/SideButtons";

export default function JoinedGroup() {
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
