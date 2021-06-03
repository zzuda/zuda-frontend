import React from 'react';
import SocketContext from '../contexts/socket';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080/room');

const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
