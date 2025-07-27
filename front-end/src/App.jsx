import React from 'react';
import Sidebar from './components/Sidebar';
import SubjectCard from './components/SubjectCard';

const subjects = [
  { title: 'History of Graphic Design', progress: 100 },
  { title: 'App Design Course', progress: 75 },
  { title: 'Digital Painting', progress: 50 },
  { title: 'App Design Course', progress: 75 },
  { title: 'History of Graphic Design', progress: 100 },
  { title: 'App Design Course', progress: 50 },
  { title: 'Digital Painting', progress: 50 },
  { title: 'App Design Course', progress: 50 },
  { title: 'History of Graphic Design', progress: 50 },
  { title: 'App Design Course', progress: 50 },
  { title: 'Digital Painting', progress: 50 },
  { title: 'App Design Course', progress: 50 },
];

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="explore-header">
          <div className="left-side">
            <h1>Explore Subjects</h1>
            <div className="circle1"></div>
          </div>

          <div className="right-side">
            <div className="circle notif-circle"></div>
            <div className="circle profile-circle">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMOvkk0KwwYRrgi2zF2PT_vxwoh9GcB_1NQ&s"
                alt="profile"
              />
            </div>
            <div className="bottom-row">
              <select className="category-select">
                <option>All Categories</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
        </div>

        <div className="subject-cards">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} title={subject.title} progress={subject.progress} />
          ))}
        </div>

        <div className="pagination-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </div>
  );
};

export default App;