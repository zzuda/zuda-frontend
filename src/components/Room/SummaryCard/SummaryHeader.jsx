import React, { useState } from 'react';
import styled from 'styled-components';
import SendMsgIcon from '../../../assets/Icons/send_msg.png';
import AttIcon from '../../../assets/Icons/attendance_check.png';
import AttIcon_Active from '../../../assets/Icons/attendance_check_active.png';
import UploadedIcon from '../../../assets/Icons/uploaded_file.png';
import UploadedIcon_Active from '../../../assets/Icons/uploaded_file_active.png';
import CamIcon from '../../../assets/Icons/cam.png';
import CamIcon_Active from '../../../assets/Icons/cam_active.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 2rem;
`;

const Text = styled.p`
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  font-size: 31px;
  color: #414141;
`;

const NameText = styled.span`
  font-size: 39px;
  color: #8b8b8b;
  margin-right: 0.5rem;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  padding: 0.5rem;
  opacity: 0.65;
  margin-right: 0.2rem;
  transition: transform 0.3s;

  &:first-child {
    cursor: pointer;
  }
  &:first-child:hover {
    transform: translateY(-5px);
    opacity: 0.8;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const ToolBarContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const Line = styled.div`
  width: 2px;
  height: 35px;
  background-color: #dadada;
  margin: 0 0.7rem 0 0.7rem;
`;

const ToolBar = () => {
  const state = useState({
    isAttendance: true,
    isUploadedFile: false,
    isOpenCam: false,
  })[0];

  const { isAttendance, isUploadedFile, isOpenCam } = state;

  return (
    <ToolBarContainer>
      <Icon src={SendMsgIcon} alt="isSendMsg" />
      <Line />
      <Icon src={isAttendance ? AttIcon_Active : AttIcon} alt="isAttendance" />
      <Icon
        src={isUploadedFile ? UploadedIcon_Active : UploadedIcon}
        alt="isFileUpload"
      />
      <Icon src={isOpenCam ? CamIcon_Active : CamIcon} alt="isCam" />
    </ToolBarContainer>
  );
};

const SummaryHeader = ({ name }) => {
  return (
    <Container>
      <Text>
        <NameText>{name}</NameText>님
      </Text>

      <ToolBar />
    </Container>
  );
};

export default SummaryHeader;
