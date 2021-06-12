import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';
import QuitIcon from '../../assets/Icons/exit.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  background-color: #f6f6f6;
`;

const QuitCard = ({ rStart, rEnd, cStart, cEnd, onClick }) => {
  return (
    <Card
      w={96}
      h={136}
      rStart={rStart}
      rEnd={rEnd}
      cStart={cStart}
      cEnd={cEnd}
      onClick={onClick}
    >
      <Container>
        <Icon src={QuitIcon} alt="Quit" />
      </Container>
    </Card>
  );
};

export default QuitCard;
