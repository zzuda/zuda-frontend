import React, { useRef } from 'react';
import styled from 'styled-components';
import { FileApi } from '../../../Api';
import toast from 'react-hot-toast';

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
    const file = fileDom.current.files[0];
    if (!file) {
      toast.error('파일을 선택해주세요!', {
        duration: 1500,
      });
      return;
    }

    const frm = new FormData();
    frm.append('roomId', 5);
    frm.append('files', file);

    try {
      await FileApi.post('/file/upload', frm);
      toast.success('파일이 업로드되었습니다!', {
        duration: 1500,
      });

      fileDom.current.value = '';
    } catch (error) {
      toast.error(error, {
        duration: 1500,
      });
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
