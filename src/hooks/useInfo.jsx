import React, { useState, createContext, useContext } from 'react';

const InfoContext = createContext(null);

const initialState = {
  userInfo: {
    id: '',
    name: '',
  },
  roomInfo: {},
};

export const InfoProvider = ({ children }) => {
  const state = useState(initialState);

  return <InfoContext.Provider value={state}>{children}</InfoContext.Provider>;
};

export const useInfo = () => useContext(InfoContext);

export const initialRoom = initialState;
