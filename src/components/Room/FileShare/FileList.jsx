import React from 'react';
import styled from 'styled-components';
import Api from '../../../Api';
import toast from 'react-hot-toast';
import TrashCanIcon from '../../../assets/Icons/garbage.png';

const Container = styled.div`
  width: 600px;
  height: 525px;
  border: 3px solid #ccc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ItemContainer = styled.div`
  width: 525px;
  height: 50px;

  margin-bottom: 1rem;
  padding: 0 1.3rem;

  border-radius: 15px;
  background-color: #cde;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color 0.35s;
  cursor: pointer;

  &:hover {
    background-color: #bcd;
  }
`;

const ItemDelButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.5s;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateX(-2px);
  }
  &:active {
    background-color: inherit;
  }

  & img {
    width: 22px;
  }
`;

const ToastDelButton = styled.button`
  background-color: #ff7458;
  color: #ffffff;
  border: none;
  border-radius: 3px;

  margin-left: 0.5rem;
  padding: 0.2rem 0.8rem;

  cursor: pointer;
  outline: none;

  &:active {
    background-color: #aaa;
  }
`;

const FileList = ({ fileState, roomId }) => {
  const [fileList, setFileList] = fileState;

  const FileItem = ({ data }) => {
    const { name } = data;

    const confirmDel = async (id) => {
      try {
        await Api.post('/file/delete', {
          roomId: `${roomId}`,
          fileName: name,
        });
      } catch (error) {
        toast.error(error, {
          duration: 1500,
        });
        return;
      }

      setFileList((prevFiles) =>
        prevFiles.filter((file) => file.id !== data.id),
      );

      toast.dismiss(id);
      toast.success('삭제가 완료되었습니다!');
    };

    const onClickDel = async () => {
      toast((t) => (
        <span>
          정말 <b style={{ color: 'salmon' }}>삭제</b>하시겠습니까?
          <ToastDelButton onClick={() => confirmDel(t.id)}>삭제</ToastDelButton>
        </span>
      ));
    };

    return (
      <ItemContainer>
        {name}
        <ItemDelButton onClick={onClickDel}>
          <img src={TrashCanIcon} alt="delete" />
        </ItemDelButton>
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
