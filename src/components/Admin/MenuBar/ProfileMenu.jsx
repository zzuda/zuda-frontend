import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../atomic/Texts/index';
import Api from '../../../Api/index'

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
  
  transform: translateX(27%);

  color: #585858;
`;

const MyEmail = styled.div`
  transform: translateX(25%);

  line-height: 5px;
  font-size: 16px;

  color: #9f9f9f; 
`;


const ProfileMenu = () => {
  const [adminData, setAdminData] = useState([]);
  
  useEffect(() => {
    const GetAdminData = async () =>{
        const res = await Api.get('/auth/me');
        const {name, email} = res.data.data
        
        setAdminData([name, email]);
        console.log(adminData);
    }
    GetAdminData();
}, []);

  return (
    <Container>
      <SmallText>MENU</SmallText>
      <ProfileBox>
        <MyName>{adminData[0]}</MyName>
        <MyEmail>{adminData[1]}</MyEmail>
      </ProfileBox>
    </Container>
  );
};

export default ProfileMenu;
