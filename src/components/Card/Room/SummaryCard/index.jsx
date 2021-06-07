import React from 'react';
import styled from 'styled-components';
import { Card } from '../../Card';
import UploadedFile from './UploadedFile';

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SummaryCard = ({ name }) => {
  return (
    <Card w={557} h={770}>
      <Container>
        {name}
        <UploadedFile />
      </Container>
    </Card>
  );
};

export default SummaryCard;
