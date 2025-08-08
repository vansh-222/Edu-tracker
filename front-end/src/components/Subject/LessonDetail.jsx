import React from 'react';

const LessonDetail = ({ lesson, onBack, onToggle }) => {
  if (!lesson) return null;

  return (
    <div className="lesson-detail">
      <button className="back-btn" onClick={onBack}>
        ← Back to Lessons
      </button>

      <h2>{lesson.title}</h2>

      <div className="lesson-material">
        <h3>📘 Study Material</h3>
        <div
          className="material-content"
          dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br/>') }}
        />
      </div>
    </div>
  );
};

export default LessonDetail;