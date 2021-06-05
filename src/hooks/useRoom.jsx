import React, { useState, createContext, useContext } from 'react';

const RoomInfoContext = createContext(null);

const initialState = {
  userInfo: {
    id: '',
    name: '',
  },
  roomInfo: {},
};

export const RoomInfoProvider = ({ children }) => {
  const state = useState(initialState);

  return (
    <RoomInfoContext.Provider value={state}>
      {children}
    </RoomInfoContext.Provider>
  );
};

export const useRoom = () => useContext(RoomInfoContext);

export const initialRoom = initialState;
