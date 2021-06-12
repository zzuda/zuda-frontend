import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import ScreenShareIcon from '../../assets/Icons/screen share.png';
import NanumText from '../../atomic/Texts/NanumText';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #f4f4f4;
  border-radius: 30px;

  &:hover {
    background-color: #f6f6f6;
  }
`;

const Icon = styled.img`
  margin-bottom: 1rem;
`;

const ScreenShareCard = () => {
  return (
    <Card w={550} h={450}>
      <Container>
        <Icon src={ScreenShareIcon} alt="screenShare" />

        <NanumText fSize={29} color="#919191" fWeight="bold">
          화면 공유
        </NanumText>
      </Container>
    </Card>
  );
};

export default ScreenShareCard;
