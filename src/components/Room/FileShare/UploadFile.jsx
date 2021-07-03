import React, { useRef } from 'react';
import styled from 'styled-components';
import { FileApi } from '../../../Api';

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
  const fileDom = useRef(null);

  const onClickSubmit = async () => {
    const file = fileDom.current.files;
    if (file.length <= 0) {
      alert('not file!');
      return;
    }

    const frm = new FormData();
    frm.append('roomId', 5);
    frm.append('files', file);

    try {
      await FileApi.post('/file/upload', frm);
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <Container>
      <Upload type="file" ref={fileDom} />
      <button onClick={onClickSubmit}>asd</button>
    </Container>
  );
};

export default UploadFile;
