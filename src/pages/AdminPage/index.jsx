import React from 'react';
import styled from 'styled-components';
import ProfileMenu from '../../components/Admin/MenuBar/ProfileMenu';
import MainMenu from '../../components/Admin/MenuBar/MainMenu';
import { SmallText } from '../../../src/atomic/Texts'
import NameList from '../../components/Admin/Preview/NameList';

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
  
  padding: 2rem;

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
        <SmallText>출석 LIST</SmallText>
        <NameList></NameList>
      </Preview>
    </Container>
  );
};

export default AdminPage;
