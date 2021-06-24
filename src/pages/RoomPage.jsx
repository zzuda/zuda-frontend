import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useInfo } from '../hooks/useInfo';
import {
  useSocket,
  useSocketQuit,
  useSocketExecption,
} from '../hooks/useSocket';
import Modal from 'react-modal';
import SummaryCard from '../components/Room/SummaryCard';
import NoticeCard from '../components/Room/NoticeCard';
import QuitCard from '../components/Room/QuitCard';
import LogCard from '../components/Room/LogCard';
import FileShareCard from '../components/Room/FileShareCard';
import ScreenShareCard from '../components/Room/ScreenShareCard';

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 3rem 10rem 3rem 10rem;
  justify-content: space-around;
  align-items: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 557px;
  height: 935px;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FileShareModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1280px;
  height: 720px;
  background-color: #f6f6f6;
  border-radius: 15px;
  outline: none;
`;

const RoomPage = () => {
  const { userInfo, roomInfo } = useInfo()[0];
  const { id, name } = userInfo;
  const socket = useSocket();
  const [isOpenModal, setIsOpenModal] = useState(false);

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
    <Container>
      <FlexCol>
        <SummaryCard name={name} />

        <FlexBox>
          <NoticeCard />
          <QuitCard onClick={onClickQuit} />
        </FlexBox>
      </FlexCol>
      <LogCard />

      <FlexCol>
        <ScreenShareCard />
        <FileShareCard onClick={() => setIsOpenModal(true)} />
      </FlexCol>

      <FileShareModal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0, 0.6)',
          },
        }}
        ariaHideApp={false}
      />
    </Container>
  );
};

export default RoomPage;
