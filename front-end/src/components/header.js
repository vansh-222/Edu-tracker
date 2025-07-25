import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #3fc5aa;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  outline: none;
`;

const SortLabel = styled.span`
  font-size: 14px;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Explore Subjects</h1>
      <Controls>
        <SearchInput type="text" placeholder="Search..." />
        <SortLabel>Sort by: All Categories</SortLabel>
      </Controls>
    </HeaderContainer>
  );
};

export default Header;
