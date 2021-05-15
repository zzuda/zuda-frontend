import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../atomic/Texts/index';

const Container = styled.div`
  width: 100%;
  height: 23%;
  background-color: #eeeeee;
  padding: 2rem;
`;

const ProfileBox = styled.div`
  margin-top:40px;
`;

const MyName = styled.div`
  font-size: 37px;
  font-weight: 700;
  
  text-align: center;

  color: #585858;
`;

const MyEmail = styled.div`
  text-align: center;

  line-height: 5px;
  font-size: 16px;

  color: #9f9f9f; 
`;

const ProfileMenu = () => {
  return (
    <Container>
      <SmallText>MENU</SmallText>
      <ProfileBox>
        <MyName>MY NAME</MyName>
        <MyEmail>example@zuda.com</MyEmail>
      </ProfileBox>
    </Container>
  );
};

export default ProfileMenu;
