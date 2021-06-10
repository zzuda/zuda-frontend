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
import SummaryCard from '../components/Room/SummaryCard';
import NoticeCard from '../components/Room/NoticeCard';
import QuitCard from '../components/Room/QuitCard';

const GirdContainer = styled.div`
  position: relative;
`;

const TempGrid = styled.div`
  display: grid;
  grid-template-columns: 433px 96px;
  grid-template-rows: repeat(2, minmax(10px, auto));
  justify-content: stretch;
  grid-column-gap: 1.5rem;
  grid-row-gap: 0.3rem;
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
      <TempGrid>
        <SummaryCard name={name} rStart={1} rEnd={2} cStart={1} cEnd={3} />

        <NoticeCard cStart={1} cEnd={2} />
        <QuitCard cStart={2} cEnd={3} onClick={onClickQuit} />
      </TempGrid>
    </GirdContainer>
  );
};

export default RoomPage;
