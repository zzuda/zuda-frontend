import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
import { useRoom } from './useRoom';
import toast from 'react-hot-toast';

const SocketContext = createContext(null);
const socket = io.connect('http://localhost:8080/room');

export const SocketProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);

export const useSocketJoin = () => {
  const setInfo = useRoom()[1];
  const history = useHistory();
  const socket = useSocket();

  const fetchRoomInfo = useCallback(
    (res) => {
      setInfo((prevState) => res);
      history.push('/room');
    },
    [setInfo, history],
  );

  useEffect(() => {
    socket.on('join', (res) => fetchRoomInfo(res));

    return () => {
      socket.off('join', (res) => fetchRoomInfo(res));
    };
  }, [socket, fetchRoomInfo]);
};

export const useSocketQuit = () => {
  const setInfo = useRoom()[1];
  const socket = useSocket();

  const handleQuit = useCallback(() => {
    toast.success('성공적으로 퇴장하였습니다!', {
      duration: 1500,
    });
    setInfo(null);
  }, [setInfo]);

  useEffect(() => {
    socket.on('quit', handleQuit);

    return () => {
      socket.off('quit', handleQuit);
    };
  }, [socket, handleQuit]);
};

export const useSocketExecption = () => {
  const socket = useSocket();

  const toastedError = useCallback((err) => {
    toast.error(err.message, {
      duration: 2500,
    });
  }, []);

  useEffect(() => {
    socket.on('exception', (err) => toastedError(err));

    return () => {
      socket.off('exception', (err) => toastedError(err));
    };
  }, [socket, toastedError]);
};
