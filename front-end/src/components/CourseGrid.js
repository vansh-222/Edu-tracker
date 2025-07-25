import React from 'react';
import styled from 'styled-components';

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const courses = [
  { title: 'History of graphic design', progress: 'Completed' },
  { title: 'App Design Course', progress: 'In Progress' },
  { title: 'Digital Painting', progress: 'Completed' },
  // Add more courses as needed
];

const CourseGrid = () => {
  return (
    <CoursesContainer>
      {courses.map((course, index) => (
        <CourseCard key={index}>
          <h2>{course.title}</h2>
          <p>{course.progress}</p>
        </CourseCard>
      ))}
    </CoursesContainer>
  );
};

export default CourseGrid;
