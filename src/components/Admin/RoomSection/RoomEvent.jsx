import React from 'react';
import styled from 'styled-components';
import { FlexWrap } from '../../../atomic/CssFlex';

const RoomEventSection = styled.div`
  cursor: pointer;

  width: 180px;
  height: 55px;

  margin-top: 14px;

  border-radius: 15px;
  background-color: #fff;
`;

const ChangeRoomName = styled.div`
  width: 90px;
  height: 55px;

  border-right: 1px solid #e2e2e2;
  border-radius: 15px 0 0 15px;

  transition: 0.3s ease-in-out;

  font-weight: 700;
  font-size: 14px;

  line-height: 55px;
  text-align: center;

  color: #535353;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const DeleteRoom = styled.div`
  width: 90px;
  height: 55px;

  border-radius: 0 15px 15px 0;

  transition: 0.3s ease-in-out;

  font-weight: 700;
  font-size: 14px;

  line-height: 55px;
  text-align: center;

  color: #ff5c5c;
  &:hover {
    border: 1px solid #ff6565;
    background-color: #ffbbbb;
  }
`;

const RoomEvent = () => {
  return (
    <RoomEventSection>
      <FlexWrap>
        <ChangeRoomName>방 이름변경</ChangeRoomName>
        <DeleteRoom>방 삭제</DeleteRoom>
      </FlexWrap>
    </RoomEventSection>
  );
};

export default RoomEvent;
