import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1rem 0.7rem 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  color: #323232;
  position: absolute;
  top: 15px;
  left: 25px;
`;

const NoticeText = styled.p`
  font-family: 'NanumSquare', sans-serif;
  color: #ff7d63;
  font-size: 22px;
  font-weight: bold;
`;

const NoticeCard = ({ rStart, rEnd, cStart, cEnd }) => {
  return (
    <Card
      w={433}
      h={136}
      rStart={rStart}
      rEnd={rEnd}
      cStart={cStart}
      cEnd={cEnd}
    >
      <Container>
        <Title>전체 공지</Title>
        <NoticeText>This is here to notice</NoticeText>
      </Container>
    </Card>
  );
};

export default NoticeCard;
