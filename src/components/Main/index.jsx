import React, { useState } from 'react';
import styled from 'styled-components';
import InputCodeForm from '../Main/InputCodeForm';
import RedButton from '../../atomic/buttons/RedButton';
import TextLoop from 'react-text-loop';
import Modal from 'react-modal';
import toast from 'react-hot-toast';
import {
  useSocket,
  useSocketJoin,
  useSocketExecption,
} from '../../hooks/useSocket';

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

const InputNameModal = styled(Modal)`
  position: absolute;
  padding-left: 3rem;
  width: 700px;
  height: 200px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 45px;
  outline: none;
`;

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const socket = useSocket();

  useSocketJoin();
  useSocketExecption();

  const [input, setInput] = useState({
    inviteCode: '',
    name: '',
  });

  const onInputChange = (e, type) => {
    setInput((prevInput) => ({ ...prevInput, [type]: e.target.value }));
  };

  useSocketJoin(name);
  const onClickEnter = () => {
    const { inviteCode, name } = input;
    if (!name) {
      toast.error('이름을 입력해주세요!', {
        duration: 1500,
      });
      return;
    }
    socket.emit('join', { inviteCode, name });
    setInput('');
    setIsModalOpen(false);
  };

  const openModal = () => {
    if (!input.inviteCode) {
      toast.error('입장코드를 입력해주세요!', {
        duration: 1500,
      });
      return;
    }
    setIsModalOpen(true);
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
        <InputCodeForm
          onChange={(e) => onInputChange(e, 'inviteCode')}
          input={input.inviteCode || ''}
          placeholder="입장코드를 입력해주세요!"
        />
        <RedButton
          width={126}
          height={70}
          radius={50}
          fSize={40}
          moveX={-126}
          onClick={openModal}
        >
          ➜
        </RedButton>
      </InputDiv>
      <InputNameModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0, 0.4)',
          },
        }}
        ariaHideApp={false}
      >
        <InputCodeForm
          onChange={(e) => onInputChange(e, 'name')}
          input={input.name || ''}
          placeholder="방에서 사용할 이름을 입력해주세요!"
        />
        <RedButton
          width={126}
          height={70}
          radius={50}
          fSize={24}
          moveX={-126}
          onClick={onClickEnter}
        >
          입장!
        </RedButton>
      </InputNameModal>
    </Container>
  );
};

export default Main;
