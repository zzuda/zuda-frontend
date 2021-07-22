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
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const FileShare = ({ roomInfo }) => {
  const id = useRef(0);
  const { roomId } = roomInfo;
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
        const data = await Api.post('/file/list', { roomId: `${roomId}` });

        const { files } = data.data.data;

        setFileList((prevFile) => files.map((file) => remakeFile(file)));
      } catch (error) {
        toast.error('오류! (정상적인 파일갱신이 불가능합니다!)', {
          duration: 1500,
        });
      }
    };

    fetchData();
  }, [setFileList, roomId]);

  return (
    <Container>
      <FileShareHeader />
      <Content>
        <FileList fileState={fileState} roomId={roomId} />
        <UploadFile roomId={roomId} />
      </Content>
    </Container>
  );
};

export default FileShare;
