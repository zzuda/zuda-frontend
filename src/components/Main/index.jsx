import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import InputCodeForm from '../Main/InputCodeForm';
import RedButton from '../../atomic/buttons/RedButton';
import TextLoop from 'react-text-loop';
import { Redirect } from 'react-router-dom';
import SocketContext from '../../contexts/socket';

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

  transition: all 0.3s;
  &:hover {
    transform: translateX(-2px);
  }
`;

const Main = () => {
  const [input, setInput] = useState('');
  const [isJoin, setIsJoin] = useState(false);
  const [info, setInfo] = useState(null);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (!info) {
      return;
    }

    setIsJoin(true);
  }, [info]);

  useEffect(() => {
    console.log('sd');
    if (isJoin) {
      <Redirect to="/room" />;
    }
  }, [isJoin]);

  useEffect(() => {
    socket.on('join', (data) => {
      console.log(data.roomInfo);
      setInfo(data.roomInfo);
    });

    return () => {
      socket.off('join', (data) => {
        console.log(data);
      });
    };
  }, [socket]);

  useEffect(() => {
    socket.on('exception', (err) => {
      console.log(err);
    });

    socket.off('exception', (err) => {
      console.log(err);
    });
  }, [socket]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onClickEnter = () => {
    socket.emit('join', { inviteCode: input, name: 'test' });
    setInput('');
  };

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
        <InputCodeForm onChange={onInputChange} input={input} />
        <RedButton
          width={126}
          height={70}
          radius={50}
          fSize={40}
          moveX={-126}
          onClick={onClickEnter}
        >
          ➜
        </RedButton>
      </InputDiv>
    </Container>
  );
};

export default Main;
