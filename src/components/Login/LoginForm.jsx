import React from 'react';
import styled from 'styled-components';

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
  outline: none;
  transition: all 0.3s;

  &[type='password'] {
    font-family: 'Noto Sans KR', sans-serif;
    &::placeholder {
      font-family: 'NanumSquare', sans-serif;
    }
  }

  &:hover {
    transform: scale(1.015);
  }
`;

const LoginForm = ({ input, onChange }) => {
  return (
    <div>
      <Label>이메일</Label>
      <Input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={input.id}
        onChange={(e) => onChange(e, 'email')}
      />

      <Label>비밀번호</Label>
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={input.password}
        onChange={(e) => onChange(e, 'password')}
      />
    </div>
  );
};

export default LoginForm;
