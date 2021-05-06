import React from 'react';
import styled from 'styled-components';
import ProfileMenu from '../../components/Admin/MenuBar/ProfileMenu';
import MainMenu from '../../components/Admin/MenuBar/MainMenu';

const Container = styled.div`
  display: flex;
  height: 1040px;
  background-color: #fdfdfd;
`;

const MenuBar = styled.div`
  width: 385px;
  height: 100%;
  color: white;
`;

const Preview = styled.div`
  width: 385px;
  height: 100%;
  background-color: #fdfdfd;
  border-right: 4px solid #ececec;
`;

const SearchBar = styled.input`
  border: none;
  
  margin: 0 auto;
`;

const AdminPage = () => {
  return (
    <Container>
      <MenuBar>
        <ProfileMenu></ProfileMenu>
        <MainMenu></MainMenu>
      </MenuBar>
      <Preview>sadsad</Preview>
    </Container>
  );
};

export default AdminPage;
