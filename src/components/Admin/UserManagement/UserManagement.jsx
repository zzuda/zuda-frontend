import React from 'react';
import styled from 'styled-components';
import SendMsgImg from '../../../assets/Icons/send_msg_gray.png';
import UploadedFilesImg from '../../../assets/Icons/uploaded_file_gray.png';
import UserBanImg from '../../../assets/Icons/user_ban.png';

const Container = styled.div`
  width: 1164px;
  height: 1040px;

  padding-top: 70px;
  padding-left: 75px;
`;

const Room = styled.div`
    height: 830px;

    -ms-overflow-style: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 355px;
  height: 40px;
`;

const RoomName = styled.span`
  font-size: 37px;
  font-weight: 800;

  color: #414146;
`;

const TitleLine = styled.div`
  width: 55px;
  height: 4px;

  margin-top: 0.6em;
  background-color: #737373;
`;

const UserCount = styled.p`
  font-size: 28px;
  font-weight: 600;

  margin-top: 0.2em;
  color: #737373;
`;

const UserSection = styled.div`
  padding-top: 35px;
`;

const UserBox = styled.div`
  position: relative;

  width: 90%;
  height: 70px;

  margin-bottom: 33px;

  display: flex;
  align-items: center;

  border-radius: 16px;
  background-color: #eeeeee;

  -webkit-box-shadow: 13px 13px 25px -2px rgba(0, 0, 0, 0.16);
  box-shadow: 13px 13px 25px -2px rgba(0, 0, 0, 0.16);

  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;

  margin-left: 23px;

  background-color: #fff;
  border: 1px solid #c7c7c7;
  border-radius: 20px;

  font-size: 21px;
  color: #5a5a5a;

  padding-left: 13px;
  line-height: 47px;
`;

const UserName = styled.div`
  margin-left: 20px;
  margin-bottom: 2px;

  font-size: 30px;
  font-weight: 700;

  color: #5a5a5a;
`;

const UserMsg = styled.p`
  position: absolute;

  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);

  width: auto;
  height: 70px;

  line-height: 70px;
  text-align: center;

  font-size: 21px;
  color: #5a5a5a;
`;

const MenuIconBox = styled.div`
  width: 160px;
  height: 70px;

  position: absolute;

  right: 0;
  top: 27%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
`;

const MenuIcons = styled.img`
  width: 30px;
  height: 30px;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: 
        translateY(-3px) 
        scale(1.03);
  }
`;

const UserManagement = () => {
  return (
    <Container>
      <Room>
        <TitleSection>
          <RoomName>ROOMNAME!</RoomName>
          <TitleLine />
          <UserCount>23</UserCount>
        </TitleSection>
        <UserSection>
          <UserBox>
            <Icon>22</Icon>
            <UserName>홍길동</UserName>
            <UserMsg>메세지 : 파일 제출하였습니다!</UserMsg>
            <MenuIconBox>
              <MenuIcons src={SendMsgImg} />
              <MenuIcons src={UploadedFilesImg} />
              <MenuIcons src={UserBanImg} />
            </MenuIconBox>
          </UserBox>
        </UserSection>
      </Room>
    </Container>
  );
};

export default UserManagement;
