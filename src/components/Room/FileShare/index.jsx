import React, { useState } from 'react';
import styled from 'styled-components';
import FileShareHeader from './FileShareHeader';
import FileList from './FileList';
import UploadFile from './UploadFile';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const FileShare = () => {
  const fileState = useState([{ id: 0, data: { name: 'test.test' } }, { id: 1, data: { name: 'test2.test' } }]);

  return (
    <Container>
      <FileShareHeader />
      <Content>
        <FileList fileState={fileState} />
        <UploadFile />
      </Content>
    </Container>
  );
};

export default FileShare;
