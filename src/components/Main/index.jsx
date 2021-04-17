import React from 'react';
import styled from 'styled-components';
import InputCodeForm from '../Main/InputCodeForm';
import RedButton from '../../atomic/buttons/RedButton';

const Container = styled.div`
  position: absolute;

  width: 700px;
  height: 100%;

  padding-top: 25rem;
  padding-left: 20rem;
`;

const Label = styled.label`
    font-size: 46px;
    font-weight: 700;

    padding-left: 1rem;

    color: #505050;
`;

const InputDiv = styled.div`
    width: 700px;

    margin-top: 1.5rem;
    display: flex;

        transition: transform 0.3s;
    &:hover {
        transform: translateY(-3px);
    }
`;

const Main = () => {
  return (
    <Container>
        <Label>너에게 주다</Label>
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
