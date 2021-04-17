import React from 'react';
import styled from 'styled-components';
import RedButton from '../../atomic/buttons/RedButton';

const Container = styled.div`
  width: 600px;
  height: 100%;
  padding-top: 23rem;
  padding-left: 30rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  color: #5d5d5d;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 523px;
  height: 77px;
  border: none;
  font-family: 'NanumSquare', sans-serif;
  font-size: 28px;
  font-weight: lighter;
  color: #a0a0a0;
  padding: 1rem 3rem;
  margin-bottom: 1.8rem;
  border-radius: 139px;
  background: #e7e7e7;
  box-shadow: 22px 22px 44px #c4c4c4, -22px -22px 44px #ffffff;
`;

const LoginGroups = styled.div`
  display: flex;
`;

const Login = () => {
  return (
    <Container>
      <Label>아이디</Label>
      <Input placeholder="ID" />

      <Label>비밀번호</Label>
      <Input placeholder="PASSWORD" />

      <LoginGroups>
        <RedButton width={156} height={70} radius={30} fSize={28}>
          로그인
        </RedButton>
      </LoginGroups>
    </Container>
  );
};

export default Login;
