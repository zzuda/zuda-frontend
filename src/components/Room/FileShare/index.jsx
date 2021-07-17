import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FileShareHeader from './FileShareHeader';
import FileList from './FileList';
import UploadFile from './UploadFile';
import Api from '../../../Api';
import toast from 'react-hot-toast';

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
  const id = useRef(0);

  const fileState = useState([]);

  const setFileList = fileState[1];

  const remakeFile = (file) => {
    const newFile = {
      id: id.current,
      name: file,
    };

    id.current += 1;
    return newFile;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Api.post('/file/list', { roomId: '5' });

        const { files } = data.data.data;

        setFileList((prevFile) => files.map((file) => remakeFile(file)));
      } catch (error) {
        toast.error(error, {
          duration: 1500,
        });
      }
    };

    fetchData();
  }, [setFileList]);

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
