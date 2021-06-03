import React, { useContext, useEffect } from 'react';
import SocketContext from '../contexts/socket';
import RoomInfoContext from '../contexts/roomInfo';
import { Redirect } from 'react-router-dom';
import RedButton from '../atomic/buttons/RedButton';

const RoomPage = () => {
  const info = useContext(RoomInfoContext)[0];
  const socket = useContext(SocketContext);

  const onClickQuit = () => {
    if (!info) {
      return;
    }
    socket.emit('quit', { roomId: info.roomInfo.roomId, questId: info.id });
    console.log(info);
  };

  useEffect(() => {
    socket.on('quit', (res) => {
      console.log(res);
    });

    return () => {
      socket.off('quit', (res) => {
        console.log(res);
      });
    };
  }, [socket]);

  useEffect(() => {
    socket.on('exception', (err) => {
      console.log(err);
    });

    socket.off('exception', (err) => {
      console.log(err);
    });
  }, [socket]);

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
