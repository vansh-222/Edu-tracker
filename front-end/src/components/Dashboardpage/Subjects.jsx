import React, { useState } from "react";
import axios from "axios";

function Subjects() {
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleCreate = async () => {
    try {
      await axios.post("http://localhost:5000/api/subjects", {
        name: name,
        progress: 0,
      });
      alert("✅ Subject created!");
      setName("");
      setShowInput(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create subject");
    }
  };

  return (
    <div className="subjects-section">
      <div className="subjects-header">
        <h2>My Subjects</h2>

        {/* ✅ REPLACED your old button with toggle logic */}
      {showInput ? (
  <div className="subject-input-wrapper">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter subject name"
      className="subject-input"
    />
    <button
      className="subject-save-button"
      onClick={handleCreate}
    >
      Save
    </button>
  </div>
) : (
  <button
    className="create-button"
    onClick={() => setShowInput(true)}
  >
    Create New Subject
  </button>
)}

      </div>

      <div className="subjects-container">
        <div className="weekly-summary">
          <p className="greeting">Hi, Vansh!</p>
          <h3>
            You have completed <br />
            6 lessons this week!
          </h3>
          <button className="see-all">See All →</button>
        </div>

        <div className="subjects-grid">
          <div className="subject-card lavender">
            <p className="subject-number">01</p>
            <h4>Design Composition</h4>
            <p className="subject-progress">12 lessons | 54%</p>
            <div className="progress-bar">
              <div style={{ width: "54%" }} />
            </div>
          </div>

          <div className="subject-card peach">
            <p className="subject-number">02</p>
            <h4>UX Design Foundations</h4>
            <p className="subject-progress">17 lessons | 87%</p>
            <div className="progress-bar">
              <div style={{ width: "87%" }} />
            </div>
          </div>

          <div className="subject-card yellow">
            <p className="subject-number">03</p>
            <h4>3D Design Foundations</h4>
            <p className="subject-progress">13 lessons | 21%</p>
            <div className="progress-bar">
              <div style={{ width: "21%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;

