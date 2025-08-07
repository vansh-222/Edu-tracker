import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LessonView = ({ subjects, onToggleLesson }) => {
  const { subjectId, lessonIndex } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find(s => s.id === parseInt(subjectId));
  const lesson = subject?.lessons[parseInt(lessonIndex)];

  if (!subject || !lesson) return <p>Lesson not found</p>;

  return (
    <div className="lesson-view">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <h2>{lesson.title}</h2>

      <div
        className="lesson-content"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      <label style={{ marginTop: '1rem', display: 'block' }}>
        <input
          type="checkbox"
          checked={lesson.completed}
          onChange={() => onToggleLesson(subject.id, parseInt(lessonIndex))}
        />
        Mark as Completed
      </label>
    </div>
  );
};

export default LessonView;