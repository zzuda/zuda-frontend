import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import RedButton from '../atomic/buttons/RedButton';
import { useInfo } from '../hooks/useInfo';
import {
  useSocket,
  useSocketQuit,
  useSocketExecption,
} from '../hooks/useSocket';
import { Card } from '../components/Card';

const GirdContainer = styled.div`
  display: grid;
  padding: 2rem;
`;

const RoomPage = () => {
  const { userInfo, roomInfo } = useInfo()[0];
  const { id, name } = userInfo;
  const socket = useSocket();

  const onClickQuit = () => {
    if (!roomInfo.roomId) {
      return;
    }
    socket.emit('quit', { roomId: roomInfo.roomId, guestId: id });
  };

  useSocketQuit();
  useSocketExecption();

  if (!roomInfo.roomId) {
    return <Redirect to="/" />;
  }

  return (
    <GirdContainer>
      <Card width={200} height={200}>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <div>{roomInfo.roomName}</div>
      </Card>
      <RedButton onClick={onClickQuit}>Quit</RedButton>
    </GirdContainer>
  );
};

export default RoomPage;
