import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Api from '../../../Api/index';
import { CountText } from '../../../atomic/AdminText/index';

const Container = styled.div`
  width: 300px;
  height: 700px;

  -ms-overflow-style: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleText = styled.h3`
  color: #585858;
  font-size: 27px;
`;

const Wrap = styled.div`
  margin: 2rem 0 0 0.8rem;

  &:nth-child(1) {
    margin-top: 30px;
  }
`;

const TitleAndCount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const RoomLine = styled.div`
  width: ${(props) => props.width}px;
  height: 2px;

  margin-top: 8px;
  background-color: #bdbdbd;
`;

const UserName = styled.p`
  font-family: 'NanumSquare', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #b7b7b7;

  margin: 18px 17px;
`;

const RoomUserList = () => {
  const [roomName, setRoomName] = useState([]);
  console.log(roomName);

  useEffect(() => {
    console.log('get시도');

    const GetRoomData = async () => {
      const res = await Api.get('/room');
      const responseData = res.data.data;

      responseData.forEach((value, index) => {
        setRoomName((prevRoomName) => [
          ...prevRoomName,
          {
            id: index,
            data: value.roomName,
          },
        ]);
      });
    };
    GetRoomData();
  }, []);

  const User = ['하건우', '하대겸', '하선우', '한동진'];
  const UserList = User.map((i) => <UserName># {i}</UserName>);

  const roomData = roomName.map((x) => (
    <Wrap>
      <TitleAndCount>
        <TitleText>{x.data}</TitleText>
        <RoomLine width={90}></RoomLine>
        <CountText fSize={13} marginTop={5}>
          26명
        </CountText>
      </TitleAndCount>
      <span>{UserList}</span>
    </Wrap>
  ));

  return (
    <>
      <Container>
        <TitleText>
          <>{roomData}</>
        </TitleText>
      </Container>
    </>
  );
};

export default RoomUserList;
