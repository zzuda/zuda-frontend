import React from 'react';
import styled from 'styled-components';
import FileShareHeader from './FileShareHeader';
import FileList from './FileList';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const FileShare = () => {
  return (
    <Container>
      <FileShareHeader />
      <FileList />
    </Container>
  );
};

export default FileShare;
