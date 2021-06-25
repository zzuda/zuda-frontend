import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Upload = styled.input`
  width: 300px;
  height: 300px;
  background-color: #ddd;

`;

const UploadFile = () => {
  return (
    <Container>
      <Upload type="file" />
    </Container>
  );
};

export default UploadFile;
