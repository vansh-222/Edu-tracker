import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #1d5b8d;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h2>EduTrack</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Subjects</li>
          <li>My Groups</li>
          <li>Settings</li>
        </ul>
      </nav>
      <button>Upgrade Now</button>
    </SidebarContainer>
  );
};

export default Sidebar;
