import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.warn("User ID not found in localStorage");
        return;
      }

      try {
        const [tasksRes, userRes] = await Promise.all([
          axios.get("http://localhost:5000/api/tasks"),
          axios.get(`http://localhost:5000/api/users/${userId}`)
        ]);

        const allTasks = tasksRes.data; // all available tasks
        const userProgress = userRes.data.progress || [];

        // Merge user progress with tasks
        const updatedTasks = allTasks.map((task) => {
          const progressEntry = userProgress.find(
            (ut) => ut.task?.toLowerCase() === task.title?.toLowerCase()
          );
          return {
            ...task,
            percent: progressEntry ? progressEntry.percent : 0,
          };
        });

        setTasks(updatedTasks);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    if (status === "Completed") return "status-badge completed";
    if (status === "In Progress") return "status-badge in";
    return "status-badge pending";
  };

  const handleDetailsClick = (task) => {
    console.log("Task Details:", task);
  };

  return (
    <div className="card">
      <h2 style={{ marginBottom: "12px" }}>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, idx) => (
          <div className="task-card" key={idx}>
            <div className="task-title">{task.title}</div>

            <div className="progress-bar" style={{ width: "150px" }}>
              <div style={{ width: `${task.percent}%` }}></div>
            </div>

            <div className={getStatusClass(task.status)}>{task.status}</div>

            <button
              className="details-btn"
              onClick={() => handleDetailsClick(task)}
            >
              Details
            </button>
          </div>
        ))
      )}
    </div>
  );
}
