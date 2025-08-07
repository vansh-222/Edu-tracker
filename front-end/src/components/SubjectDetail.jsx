import React, { useState } from 'react';
import LessonDetail from './LessonDetail';

const SubjectDetail = ({ subject, onBack, onToggleLesson }) => {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(null);

  if (!subject) return null;

  // 👉 Show full lesson material when selected
  if (selectedLessonIndex !== null) {
    const lesson = subject.lessons[selectedLessonIndex];

    return (
      <LessonDetail
        lesson={lesson}
        onBack={() => setSelectedLessonIndex(null)}
        onToggle={() => onToggleLesson(subject.id, selectedLessonIndex)}
      />
    );
  }

  return (
    <div className="subject-detail">
      <button onClick={onBack} className="back-btn">← Back</button>
      <h2>{subject.title}</h2>

      <ul className="lesson-list">
        {subject.lessons.map((lesson, i) => (
          <li
            key={i}
            onClick={() => setSelectedLessonIndex(i)}
            className="lesson-item"
          >
            <label>
              <input
                type="checkbox"
                checked={lesson.completed}
                onChange={(e) => {
                  e.stopPropagation(); // avoid triggering lesson click
                  onToggleLesson(subject.id, i);
                }}
              />
              {lesson.title}
            </label>
          </li>
        ))}
      </ul>

      <p className="progress-text">Progress: {subject.progress}%</p>
    </div>
  );
};

export default SubjectDetail;