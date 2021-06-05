import React from 'react';
import { Redirect } from 'react-router-dom';
import RedButton from '../atomic/buttons/RedButton';
import { useRoom } from '../hooks/useRoom';
import {
  useSocket,
  useSocketQuit,
  useSocketExecption,
} from '../hooks/useSocket';

const RoomPage = () => {
  const info = useRoom()[0];
  const socket = useSocket();

  const onClickQuit = () => {
    if (!info) {
      return;
    }
    socket.emit('quit', { roomId: info.roomInfo.roomId, guestId: info.id });
  };

  useSocketQuit();
  useSocketExecption();

  if (!info) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h3>{info.id}</h3>
      <div>{info.roomInfo.roomName}</div>
      <RedButton onClick={onClickQuit}>Quit</RedButton>
    </div>
  );
};

export default RoomPage;
