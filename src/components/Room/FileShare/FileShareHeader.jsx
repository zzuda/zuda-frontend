import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  height: 100px;
  padding: 2rem;
`;

const FileShareHeader = () => {
  return (
    <Container>
      <h1>파일공유</h1>
    </Container>
  );
};

export default FileShareHeader;
