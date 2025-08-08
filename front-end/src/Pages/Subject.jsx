import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../components/Subject/Sidebar';
import SubjectCard from '../components/Subject/SubjectCard';
import SubjectDetail from '../components/Subject/SubjectDetail';
import LessonDetail from '../components/Subject/LessonDetail';
import '../components/Subject/Subject.css';

const Subject = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);

  const predefinedSubjects = [
    'Creative Typography',
    'Design Thinking Crash Course',
    'Copywriting for Designers',
    'Microinteractions & Motion Design',
    'Web Accessibility Essentials'
  ];

  const toggleNotifications = () => setShowNotifications((prev) => !prev);
  const toggleSearch = () => setSearchVisible((prev) => !prev);
  const toggleSubjectDropdown = () => setShowSubjectDropdown((prev) => !prev);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/subjects')
      .then((res) => setSubjects(res.data))
      .catch((err) => {
        console.warn('⚠️ Backend not responding.', err);
        setSubjects([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const getDefaultLessons = (title) => [
    { title: `${title} - Introduction`, completed: false },
    { title: `${title} - Intermediate`, completed: false },
    { title: `${title} - Advanced`, completed: false },
  ];

  const handleAddSubject = async (title) => {
    const newSubject = {
      id: Date.now(),
      title,
      lessons: getDefaultLessons(title),
      progress: 0
    };
    try {
      const res = await axios.post('http://localhost:5000/api/subjects', newSubject);
      setSubjects((prev) => [...prev, res.data]);
      setShowSubjectDropdown(false);
    } catch (err) {
      console.error('Error adding subject:', err);
    }
  };

  const handleDeleteSubject = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this subject?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/subjects/${id}`);
      setSubjects((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error('Error deleting subject:', err);
    }
  };

  const handleToggleLesson = async (subjectId, lessonIndex) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/subjects/${subjectId}/lessons/${lessonIndex}`
      );
      const updatedSubject = res.data;
      setSubjects((prev) =>
        prev.map((s) => (s.id === subjectId ? updatedSubject : s))
      );
      if (selectedSubject?.id === subjectId) {
        setSelectedSubject(updatedSubject);
      }
    } catch (err) {
      console.error('Error toggling lesson:', err);
    }
  };

  if (selectedSubject && selectedLessonIndex !== null) {
    const lesson = selectedSubject.lessons[selectedLessonIndex];
    return (
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <LessonDetail
            lesson={lesson}
            onBack={() => setSelectedLessonIndex(null)}
            onToggle={() => handleToggleLesson(selectedSubject.id, selectedLessonIndex)}
          />
        </div>
      </div>
    );
  }

  if (selectedSubject) {
    return (
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <SubjectDetail
            subject={selectedSubject}
            onBack={() => setSelectedSubject(null)}
            onToggleLesson={handleToggleLesson}
            onSelectLesson={(index) => setSelectedLessonIndex(index)}
          />
        </div>
      </div>
    );
  }

  const filteredSubjects = subjects.filter((s) => {
    const matchTitle = s.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLesson = s.lessons.some((l) => l.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchTitle || matchLesson;
  });

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="explore-header">
          <div className="left-side">
            <h1>Explore Subjects</h1>
          </div>

          <div className="right-side" style={{ position: 'relative' }}>
            <div className="circle search-circle" onClick={toggleSearch}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzveJIn0K5nxbL0HK8MVQJHnw_6iEDkE7EZQuYWzjL7rjU2R61LkovSib-Qr4xgMRSImU&usqp=CAU" alt="search" className="icon-img" />
            </div>
            <div className="circle notif-circle" onClick={toggleNotifications}></div>
            {showNotifications && <div className="notification-box">💬 No notifications yet</div>}
            <div className="circle profile-circle">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMOvkk0KwwYRrgi2zF2PT_vxwoh9GcB_1NQ&s" alt="profile" />
            </div>
          </div>
        </div>

        {searchVisible && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search subjects or lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <button className="add-btn" onClick={toggleSubjectDropdown}>Add Subject</button>
          {showSubjectDropdown && (
            <div className="dropdown-box">
              {predefinedSubjects.map((subj) => (
                <div
                  key={subj}
                  className="dropdown-item"       
                  onClick={() => handleAddSubject(subj)}
                >
                  {subj}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="subject-cards">
          {loading ? (
            <p style={{ color: '#888', textAlign: 'center' }}>Loading subjects...</p>
          ) : filteredSubjects.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'white' }}>No matching results.</p>
          ) : (
            filteredSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onClick={() => setSelectedSubject(subject)}
                onDelete={() => handleDeleteSubject(subject.id)}
              />
            ))
          )}
        </div>

        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Subject;