// 📁 components/SubjectCard.jsx
import React from 'react';

const SubjectCard = ({ subject, onClick }) => {
  if (!subject) return null;

  const lessonsCount = subject.lessons?.length || 0;
  const progress = subject.progress ?? 0;
  const isComplete = progress === 100;

  return (
    <div
      className="subject-card"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
    >
      <div className="subject-icon" />
      <h3>{subject.title}</h3>
      <p className="instructor">Instructor: William Joe</p>
      <p className="lessons">{lessonsCount} Lessons</p>
      <p className="duration">~{(lessonsCount * 1.5).toFixed(1)} Hours</p>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {isComplete ? 'Completed' : `${progress}%`}
        </div>
      </div>

      <p className="status">
        {isComplete ? '✅ Completed' : '🕓 In Progress'}
      </p>
    </div>
  );
};

export default SubjectCard;