import React from 'react';
import { Redirect } from 'react-router-dom';
import RedButton from '../atomic/buttons/RedButton';
import { useInfo } from '../hooks/useInfo';
import {
  useSocket,
  useSocketQuit,
  useSocketExecption,
} from '../hooks/useSocket';

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
    <div>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <div>{roomInfo.roomName}</div>
      <RedButton onClick={onClickQuit}>Quit</RedButton>
    </div>
  );
};

export default RoomPage;
