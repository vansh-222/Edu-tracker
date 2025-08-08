import React from "react";

function Welcome() {
  return (
    <div className="welcome-box">

      <div className="welcome-image">
        <img src="Frontlogo.png" alt="Welcome" />
      </div>

      <div className="welcome-text">
        <h3>
          Hello, <span>Vansh Kumar</span>
        </h3>
        <p>
          Your personalized study dashboard to track syllabus, join groups,
          and visualize progress at a glance.
        </p>
        <div className="welcome-actions">
          <button className="btn btn-primary">Join a Group</button>
          <button className="btn btn-secondary">View Progress</button>
        </div>
      </div>

    </div>
  );
}

export default Welcome;

