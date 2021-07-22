import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FileApi } from '../../../Api';
import toast from 'react-hot-toast';
import NanumText from '../../../atomic/Texts/NanumText';
import FileIcon from '../../../assets/Icons/file share.png';

const Container = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Upload = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const Label = styled.label`
  width: 250px;
  height: 250px;
  word-break: break-word;
  text-overflow: ellipsis;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;

  cursor: pointer;

  & img {
    margin-bottom: 0.5rem;
  }
`;

const UploadButton = styled.button`
  width: 75px;
  height: 45px;
  border: 2px solid #333;
  border-radius: 7px;

  transition: transform 1s, background-color 0.5s, color 0.5s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-15px);
    background-color: #ff7458;
    border: none;
    box-shadow: 0.3px 0.3px 4px gray;
    & p {
      color: white;
    }
  }

  &:active {
    transition: transform 1s, background-color 0.1s, color 0.1s;
    background-color: #eee;
    & p {
      color: #333;
    }
  }
`;

const UploadFile = ({ roomId }) => {
  const fileDom = useRef(null);
  const [fileName, setFileName] = useState('');

  const onClickSubmit = async () => {
    const file = fileDom.current.files[0];

    if (!file) {
      toast.error('파일을 선택해주세요!', {
        duration: 1500,
      });
      return;
    }

    const frm = new FormData();
    frm.append('roomId', roomId);
    frm.append('files', file);

    try {
      await FileApi.post('/file/upload', frm);
      toast.success('파일이 업로드되었습니다!', {
        duration: 1500,
      });

      fileDom.current.value = '';
      setFileName((prevName) => '');
    } catch (error) {
      toast.error(error, {
        duration: 1500,
      });
      return;
    }
  };

  const Uploader = () => {
    return (
      <Label htmlFor="fileUpload">
        <img src={FileIcon} alt="fileUpload" />
        <NanumText fSize={fileName ? 22 : 28}>
          {fileName ? fileName : '파일선택'}
        </NanumText>
      </Label>
    );
  };

  return (
    <Container>
      <Upload
        ref={fileDom}
        id="fileUpload"
        onChange={(e) => setFileName((prevName) => e.target.files[0].name)}
      />
      <Uploader />

      <UploadButton onClick={onClickSubmit}>
        <NanumText>업로드!</NanumText>
      </UploadButton>
    </Container>
  );
};

export default UploadFile;
