import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../atomic/Texts/index';

const Container = styled.div`
  width: 100%;
  height: 23%;
  background-color: #eeeeee;
  padding: 2rem;
`;

const MyName = styled.div`
  font-size: 37px;
  font-weight: 700;
  
  margin-top: 25px;
  text-align: center;

  color: #585858;
`;

const MyEmail = styled.div`
  text-align: center;

  font-size: 16px;

  color: #9f9f9f;
`;

const ProfileMenu = () => {
  return (
    <Container>
      <SmallText>MENU</SmallText>
      <MyName>MY NAME</MyName>
      <MyEmail>example@zuda.com</MyEmail>
    </Container>
  );
};

export default ProfileMenu;
