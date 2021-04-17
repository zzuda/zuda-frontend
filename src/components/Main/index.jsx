import React from 'react';
import styled from 'styled-components';
import InputCodeForm from '../Main/InputCodeForm';
import RedButton from '../../atomic/buttons/RedButton';

import TextLoop from "react-text-loop";

const Container = styled.div`
  position: absolute;

  width: 700px;
  height: 100%;

  padding-top: 25rem;
  padding-left: 20rem;
`;

const LoopText = styled.label`
    font-size: 46px;
    font-weight: 700;

    padding-left: 1rem;

    color: #5f5f5f;
`;
const LoopText2 = styled.label`
    font-size: 46px;
    font-weight: 700;

    padding-left: 1rem;
    
    color: #ff5757;
`;


const InputDiv = styled.div`
    width: 700px;

    margin-top: 1.5rem;
    display: flex;

        transition: transform 0.3s;
    &:hover {
        transform: translateX(-2px);
    }
`;

const Main = () => {
  return (
    <Container>
        <TextLoop interval={3000}>
              <LoopText>파일을</LoopText>
              <LoopText>화면을</LoopText>
              <LoopText>그룹을</LoopText>
              <LoopText>출석체크를</LoopText>
        </TextLoop>
        <LoopText2>주다</LoopText2>
        <InputDiv>
            <InputCodeForm />
            <RedButton
                width={126}
                height={70}
                radius={50}
                fSize={40}
                moveX={-126}
            >➜</RedButton>
        </InputDiv>
    </Container>
  );
};

export default Main;
