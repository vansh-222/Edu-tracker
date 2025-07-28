import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "../styles/GroupsGrid.css";


function GroupCard({ category, title, members }) {
  const minMembers = 50; // Maximum members ka count
  const progressWidth = `${(members / minMembers) * 100}%`; // Members ke hisaab se width

  return (
    <div className="group-card">
    
      <div className="card-header">
        <span className="card-category">{category}</span>
      </div>

      <h3 className="card-title">{title}</h3>

      {/* Members */}
      <div className="members-row">
        <div className="avatars">
          <FaUserCircle className="avatar" />
          <FaUserCircle className="avatar" />
          <FaUserCircle className="avatar" />
        </div>
        <span className="members-count">{members}+ Members</span>
      </div>

      <div className="divider-container">
        <div
          className="divider-fill"
          style={{ width: progressWidth, backgroundColor: "#52edb1 " }}
        ></div>
      </div>

      {/* Button */}
      <button className="view-btn">View Group</button>
    </div>
  );
}

export default function GroupsGrid() {
  const groups = [
    { category: "Course", title: "DBMS", members: 3 },
    { category: "Project", title: "Web Development", members: 6 },
    { category: "Subject", title: "Operating Systems", members: 8 },
    { category: "Workshop", title: "React Basics", members: 10 },
    { category: "Topic", title: "Machine Learning", members: 4 },
    { category: "Discussion", title: "UI/UX Design", members: 7 },
  ];

  return (
    <div className="groups-grid">
      {groups.map((g, i) => (
        <GroupCard
          key={i}
          category={g.category}
          title={g.title}
          members={g.members}
        />
      ))}
    </div>
  );
}


