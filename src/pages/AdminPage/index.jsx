import React from 'react';
import styled from 'styled-components';
import ProfileMenu from '../../components/Admin/MenuBar/ProfileMenu';
import MainMenu from '../../components/Admin/MenuBar/MainMenu';
import NameList from '../../components/Admin/Preview/NameList';
import RoomBlock from '../../components/Admin/RoomSection';

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
  
  /* padding: 2rem; */

  background-color: #fdfdfd;
  border-right: 3px solid #ececec;
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
      <Preview>
        <NameList></NameList>
      </Preview>
      <RoomBlock/>
    </Container>
  );
};

export default AdminPage;
