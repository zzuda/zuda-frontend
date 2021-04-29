import React from 'react';
import styled from 'styled-components';
import ProfileMenu from '../../components/Admin/ProfileMenu';

const Container = styled.div`
  display: flex;
  height: 1040px;
  background-color: #fdfdfd;
`;

const MenuBar = styled.div`
  width: 385px;
  height: 100%;
  background-color: #e8e8e8;
  color: white;
`;

const Preview = styled.div`
  width: 385px;
  height: 100%;
  background-color: #fdfdfd;
  border-right: 4px solid #ececec;
`;

const AdminPage = () => {
  return (
    <Container>
      <MenuBar>
        <ProfileMenu>sd</ProfileMenu>
      </MenuBar>
      <Preview>sadsad</Preview>
    </Container>
  );
};

export default AdminPage;
