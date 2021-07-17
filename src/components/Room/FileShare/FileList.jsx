import React from 'react';
import styled from 'styled-components';
import Api from '../../../Api';
import toast from 'react-hot-toast';

const Container = styled.div`
  width: 600px;
  height: 600px;
  border: 3px solid #ccc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ItemContainer = styled.div`
  width: 500px;
  height: 50px;
  background-color: #ccc;
  margin-bottom: 1rem;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const FileList = ({ fileState }) => {
  const [fileList, setFileList] = fileState;

  const FileItem = ({ data }) => {
    const { name } = data;

    const onClickDel = async () => {
      try {
        await Api.post('/file/delete', {
          roomId: '5',
          fileName: name,
        });
      } catch (error) {
        toast.error(error, {
          duration: 1500,
        });
      }

      setFileList((prevFiles) =>
        prevFiles.filter((file) => file.id !== data.id),
      );
    };

    return (
      <ItemContainer>
        {name}
        <button onClick={onClickDel}>X</button>
      </ItemContainer>
    );
  };

  return (
    <Container>
      {fileList.map((file) => (
        <FileItem data={file} key={file.id} />
      ))}
    </Container>
  );
};

export default FileList;
