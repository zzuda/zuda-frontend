import React from 'react';
import styled from 'styled-components';
import { InnerCard, InnerText } from '../../Card/Card';
import MsgTool from '../../../assets/Icons/msg_tool.png';
import FDIcon from '../../../assets/Icons/file_download.png';
import CamIcon from '../../../assets/Icons/cam.png';

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: #f6f6f6;
  padding: 0.5rem;
  box-shadow: 2px 2px 12px #c9c9c9;
  border-radius: 12px;
  transition: transform 0.4s;
  cursor: pointer;

  &:hover {
    transform: translateY(5px);
  }

  & > img {
    width: 100%;
    height: 100%;
    opacity: 0.65;
  }
`;

const Icon = ({ img, alt }) => {
  return (
    <IconContainer>
      <img src={img} alt={alt} />
    </IconContainer>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1rem 1rem 1rem;
`;

const ScreenView = ({ rStart, rEnd, cStart, cEnd }) => {
  return (
    <InnerCard
      w={188}
      h={240}
      rStart={rStart}
      rEnd={rEnd}
      cStart={cStart}
      cEnd={cEnd}
    >
      <InnerText top={15} left={20}>
        화면보기
      </InnerText>

      <Container>
        <Icon img={MsgTool} alt="msgTool"></Icon>
        <Icon img={FDIcon} alt="fileDownload"></Icon>
        <Icon img={CamIcon} alt="openCam"></Icon>
      </Container>
    </InnerCard>
  );
};

export default ScreenView;
