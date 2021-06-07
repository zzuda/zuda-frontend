import React from 'react';
import styled from 'styled-components';
import { InnerCard } from '../../Card';

const FileBoxContainer = styled.div`
  width: 433px;
  height: 66px;
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileBoxTitle = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 21px;
  color: #686868;
`;

const FileBox = ({ id }) => {
  return (
    <FileBoxContainer key={id}>
      <FileBoxTitle>과제실습 1.zip</FileBoxTitle>
    </FileBoxContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  padding: 1rem;
`;

const BoxTitle = styled.h3`
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  color: #919191;
`;

const UploadedFile = () => {
  return (
    <InnerCard w={475} h={290}>
      <BoxTitle>업로드한 파일</BoxTitle>
      <Container>
        <FileBox />
        <FileBox />
        <FileBox />
      </Container>
    </InnerCard>
  );
};

export default UploadedFile;
