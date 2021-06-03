import React, { useState } from 'react';
import RoomInfoContext from '../contexts/roomInfo';

const RoomInfoProvider = ({ children }) => {
  const state = useState();

  return (
    <RoomInfoContext.Provider value={state}>
      {children}
    </RoomInfoContext.Provider>
  );
};

export default RoomInfoProvider;
