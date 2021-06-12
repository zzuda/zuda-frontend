import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Card/Card';
import Log from './Log';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  overflow: hidden;
`;

const LogCard = () => {
  return (
    <Card w={595} h={935}>
      <Container>
        <Log isMe />
        <Log />
        <Log isMe />
        <Log />
        <Log />
        <Log />
      </Container>
    </Card>
  );
};

export default LogCard;
