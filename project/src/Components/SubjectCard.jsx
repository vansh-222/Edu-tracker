import React from 'react';

const SubjectCard = ({ title, progress }) => {
  return (
    <div className="subject-card">
      <div className="subject-icon"></div>
      <h3>{title}</h3>
      <p className="instructor">William Joe</p>
      <p className="lessons">15 Lessons</p>
      <p className="duration">40 Hours</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {progress === 100 ? 'Completed' : `${progress}%`}
        </div>
      </div>
      <p className="status">
        {progress === 100 ? 'Completed' : 'In Progress'}
      </p>
    </div>
  );
};

export default SubjectCard;