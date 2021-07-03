import React from 'react';
import styled from 'styled-components';
import Api from '../../../Api';

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
  const [files, setFiles] = fileState;

  const FileItem = ({ data }) => {
    const { name } = data.data;

    const onClickDel = async () => {
      try {
        await Api.post('/file/delete', {
          roomId: 5,
          fileName: data.data.name,
        });
      } catch (error) {
        console.error(error);
      }

      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== data.id));
    };

    return (
      <ItemContainer onClick={onClickDel} key={data.id}>
        {name}
        <button>X</button>
      </ItemContainer>
    );
  };

  return (
    <Container>
      {files.map((file) => (
        <FileItem data={file} />
      ))}
    </Container>
  );
};

export default FileList;
