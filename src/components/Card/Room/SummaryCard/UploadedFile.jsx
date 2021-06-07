import React from 'react';
import styled from 'styled-components';
import { InnerCard, InnerText } from '../../Card';

const FileBoxContainer = styled.div`
  width: 433px;
  height: 66px;
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 16px #b9b9b9;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const FileBoxTitle = styled.span`
  font-family: 'NanumSquare', sans-serif;
  font-size: 21px;
  color: #686868;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: inherit;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;

  &:hover {
    color: rgb(240, 30, 30);
    font-weight: 600;
    transform: translateX(-8px);
  }
`;

const FileBox = ({ id }) => {
  return (
    <FileBoxContainer key={id}>
      <FileBoxTitle>과제실습 1.zip</FileBoxTitle>
      <CloseButton>X</CloseButton>
    </FileBoxContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
`;

const UploadedFile = () => {
  return (
    <InnerCard w={475} h={290}>
      <InnerText top={10} left={20}>
        업로드한 파일
      </InnerText>

      <Container>
        <FileBox />
        <FileBox />
      </Container>

      <InnerText btm={8} right={30}>
        자세히보기
      </InnerText>
    </InnerCard>
  );
};

export default UploadedFile;
