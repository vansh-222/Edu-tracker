import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JoinedGroup.css";

export default function Resources() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("PDF");
  const [resources, setResources] = useState([]);

  const userId = localStorage.getItem("userId");

  const fetchResources = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/resources/${userId}`);
      setResources(res.data);
    } catch (error) {
      console.error("Failed to fetch resources", error);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !link || !type || !userId) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/resources", {
        title,
        link,
        type,
        userId,
      });
      setTitle("");
      setLink("");
      setType("PDF");
      fetchResources();
    } catch (error) {
      console.error("Failed to upload resource", error);
    }
  };

  return (
    <div className="resources-wrapper">
      {/* Left Card */}
      <div className="upload-form">
        <h2>Upload Resource</h2>
        <form onSubmit={handleUpload}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="PDF">PDF</option>
            <option value="Video">Video</option>
            <option value="Notes">Notes</option>
          </select>
          <button type="submit">Upload</button>
        </form>
      </div>

      {/* Right Card */}
      <div className="resource-list">
        <h3>Your Resources</h3>
        {resources.map((res, idx) => (
          <div key={idx} className="resource-card">
            <p><strong>{res.title}</strong></p>
            <p>Type: {res.type}</p>
            <a href={res.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        ))}
      </div>
    </div>
  );
}
