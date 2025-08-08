import React, { useState, useEffect } from "react";
import axios from "axios";


function Subjects() {
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/subjects");
        setSubjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubjects();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/subjects", {
        name: name,
        progress: 0,
      });
      setSubjects([...subjects, res.data]);
      setName("");
      setShowInput(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create subject");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/subjects/${id}`);
      setSubjects(subjects.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete subject");
    }
  };

  return (
    <div className="subjects-section">
      <div className="subjects-header">
        <h2>My Subjects</h2>

        {showInput ? (
          <div className="subject-input-wrapper">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter subject name"
              className="subject-input"
            />
            <button className="subject-save-button" onClick={handleCreate}>
              Save
            </button>
          </div>
        ) : (
          <button className="create-button" onClick={() => setShowInput(true)}>
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
          {/* Static Cards */}
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


          {/* Dynamic Subjects */}
          {subjects.map((subject, idx) => {
            const colors = ["lavender", "peach", "yellow"];
            const colorClass = colors[(idx + 3) % colors.length];
            return (
              <div
                key={subject._id}
                className={`subject-card ${colorClass} dynamic-card`}
              >
                <p className="subject-number">
                  {String(idx + 4).padStart(2, "0")}
                </p>

                <button
                  className="delete-btn absolute-delete"
                  onClick={() => handleDelete(subject._id)}
                  title="Delete Subject"
                >
                  🗑️
                </button>

                <h4>{subject.name}</h4>
                <p className="subject-progress">
                  0 lessons | {subject.progress}%
                </p>
                <div className="progress-bar">
                  <div style={{ width: `${subject.progress}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Subjects;


