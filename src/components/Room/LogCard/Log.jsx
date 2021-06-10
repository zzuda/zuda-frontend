import React from 'react';
import styled from 'styled-components';

const Wrppaer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isMe ? 'flex-end' : 'flex-start')};
  margin-bottom: 1.5rem;
`;

const Container = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #ff7458;
  border-radius: 15px;
`;

const Inner = styled.div`
  width: 442px;
  height: 100%;
  background-color: #efefef;
  font-family: 'NanumSquare', sans-serif;
  box-shadow: 5px 5px 24px #c9c9c9;
  border-radius: 15px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1.2rem;
`;

const Circle = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: #dfdfdf;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  opacity: 0.8;
`;

const Text = styled.p`
  color: #363636;
  font-size: 16px;
  padding-left: 1rem;
`;

const NameText = styled.span`
  color: #363636;
  font-size: 20px;
  font-weight: bold;
  margin-right: 0.3rem;
`;

const TimeStamp = styled.span`
  position: absolute;
  right: 20px;
  color: #595959;
  font-size: 13px;
`;

const Log = ({ isMe }) => {
  return (
    <Wrppaer isMe={isMe}>
      <Container>
        <Inner>
          <Circle>25</Circle>
          <Text>
            <NameText>한동진</NameText>님이 출석체크 하였습니다.
          </Text>
          <TimeStamp>08:22</TimeStamp>
        </Inner>
      </Container>
    </Wrppaer>
  );
};

export default Log;
