import React, { useState } from 'react';
import styled from 'styled-components';
import RedButton from '../../atomic/buttons/RedButton';
import ButtonGroup from '../ButtonGroup';
import { Google, FaceBook, Kakao, Naver } from '../Socials';
import LoginForm from './LoginForm';
import Api from '../../Api';

const Container = styled.div`
  width: 600px;
  height: 100%;
  padding-top: 24rem;
  padding-left: 20rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
`;

const LoginGroups = styled.div`
  display: flex;
  min-width: 600px;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

const Login = () => {
  const initialLoginState = {
    text: '로그인',
    fSize: 28,
  };

  const [loginBtnState, setLoginBtnState] = useState(initialLoginState);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const onChange = (e, id) => {
    setInput((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  };

  const onMouseOver = () => {
    setLoginBtnState({
      text: '➜',
      fSize: 42,
    });
  };

  const onClickLogin = async () => {
    const { email, password } = input;

    if ((email.trim() === '') | (password.trim() === '')) {
      alert('공백이 있어요!');
      return;
    }

    try {
      const res = await Api.post('/auth/login', {
        email,
        password,
      });
      const token = res.data.data.token;
      console.log(token);
    } catch (err) {
      if (!err.response.data) {
        return;
      }

      if (err.response.data.code === 'auth-404') {
        const { message } = err.response.data;
        alert(message);
        setInput((prevState) => ({ ...prevState, password: '' }));
      }
    }
  };

  const onMouseLeave = () => setLoginBtnState(initialLoginState);

  const { text, fSize } = loginBtnState;

  return (
    <Container>
      <LoginForm input={input} onChange={onChange} />
      <LoginGroups>
        <RedButton
          width={156}
          height={70}
          radius={30}
          fSize={fSize}
          moveX={1}
          isShadow
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClickLogin}
        >
          {text}
        </RedButton>
        <ButtonGroup>
          <Google />
          <FaceBook />
          <Kakao />
          <Naver />
        </ButtonGroup>
      </LoginGroups>
    </Container>
  );
};

export default Login;
