import React, { useState, createContext, useContext } from 'react';

const RoomInfoContext = createContext(null);

export const RoomInfoProvider = ({ children }) => {
  const state = useState();

  return (
    <RoomInfoContext.Provider value={state}>
      {children}
    </RoomInfoContext.Provider>
  );
};

export const useRoom = () => useContext(RoomInfoContext);
