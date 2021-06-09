import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Card';
import UploadedFile from './UploadedFile';
import ScreenView from './ScreenView';
import WorkLog from './WorkLog';

const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  grid-template-rows: repeat(2, minmax(10px, auto));
  grid-gap: 0.1rem;
  justify-content: stretch;
  align-items: center;
  grid-gap: 0.4rem;
`;

const SummaryCard = ({ name }) => {
  return (
    <Card w={557} h={770}>
      {name}
      <Container>
        <UploadedFile cStart={1} cEnd={3} rStart={1} rEnd={2} />
        <ScreenView cStart={1} cEnd={2} />
        <WorkLog />
      </Container>
    </Card>
  );
};

export default SummaryCard;
