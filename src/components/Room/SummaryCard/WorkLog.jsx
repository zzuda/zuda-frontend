import React from 'react';
import styled from 'styled-components';
import { InnerCard, InnerText } from '../../Card/Card';

const LogBox = styled.div`
  width: 222px;
  height: 44px;
  background-color: #f6f6f6;
  font-family: 'NanumSquare', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #686868;
  box-shadow: 2px 2px 16px #c9c9c9;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  margin-bottom: 0.5rem;
`;

const Log = ({ logMsg }) => {
  return <LogBox>{logMsg}</LogBox>;
};

const Container = styled.div`
  padding: 2.5rem 1rem 1rem 1rem;
`;

const WorkLog = ({ rStart, rEnd, cStart, cEnd }) => {
  return (
    <InnerCard
      w={256}
      h={240}
      rStart={rStart}
      rEnd={rEnd}
      cStart={cStart}
      cEnd={cEnd}
    >
      <InnerText top={15} left={30}>
        작업 로그
      </InnerText>

      <Container>
        <Log logMsg="과제실습 1.zip 업로드" />
        <Log logMsg="과제실습 2.zip 업로드" />
      </Container>
    </InnerCard>
  );
};

export default WorkLog;
