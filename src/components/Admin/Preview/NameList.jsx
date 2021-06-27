import React, { useState } from 'react';
import styled from 'styled-components';
import RoomUserList from './RoomUserList';
import { SmallText } from '../../../atomic/Texts/index';
import { CountText } from '../../../atomic/AdminText/index';

const Container = styled.div`
  width: 300px;
  margin: 45px 32px;
`;

const TitleText = styled.h3`
  color: #585858;
  font-size: 27px;
`;

const All = styled.div`
  display: flex;
  justify-content: space-between;

  width: 280px;

  padding-right: 30px;
  align-items: center;

  margin: 3em 0 1.1em 1.6em;
`;

const Room = styled.div``;

const NameList = () => {
  const [userCount, setUserCount] = useState(129);

  return (
    <Container>
      <SmallText>유저 LIST</SmallText>
      <All>
        <TitleText>· 전체</TitleText>
        <CountText>{userCount}</CountText>
      </All>
      <Room>
        <RoomUserList></RoomUserList>
      </Room>
    </Container>
  );
};

export default NameList;
