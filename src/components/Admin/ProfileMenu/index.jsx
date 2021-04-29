import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../atomic/Texts/index';

const Container = styled.div`
  width: 100%;
  height: 20%;
  background-color: #eeeeee;
  padding: 2rem;
`;

const ProfileMenu = () => {
  return (
    <Container>
      <SmallText>MENU</SmallText>
    </Container>
  );
};

export default ProfileMenu;
