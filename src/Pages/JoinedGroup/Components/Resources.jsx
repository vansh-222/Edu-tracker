import React, { useState } from "react";

const allResources = [
  { title: "Binary Trees Notes", type: "PDF" },
  { title: "Sorting Algorithms", type: "Notes" },
  { title: "Recursion Tutorial", type: "Video" },
  { title: "Graph Theory Guide", type: "PDF" },
];

const tabs = ["All", "PDFs", "Videos", "Notes"];

export default function Resources() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredResources =
    activeTab === "All"
      ? allResources
      : allResources.filter((r) => r.type.toLowerCase() === activeTab.toLowerCase().slice(0, -1));

  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return "📄";
      case "Video":
        return "🎥";
      case "Notes":
        return "📝";
      default:
        return "📁";
    }
  };

  return (
    <div className="card">
      <div className="resource-header">
        <h3>Resources</h3>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {filteredResources.map((r, i) => (
        <div className="resource-row" key={i}>
          <span>{getIcon(r.type)}</span>
          <span>{r.title}</span>
          <span className="resource-type">{r.type}</span>
        </div>
      ))}
    </div>
  );
}
