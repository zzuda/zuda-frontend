import React from 'react';
import styled from 'styled-components';
import { Label, Ninput } from '../../atomic/Inputs';
import RedButton from '../../atomic/buttons/RedButton';
import { SocialGroup } from '../Socials';

const RegisterGroup = styled.div`
  display: flex;
  min-width: 600px;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

const RegisterForm = ({ input, onChange, onClick }) => {
  return (
    <form>
      <Label fSize={24}>이름</Label>
      <Ninput
        type="text"
        width={423}
        height={63}
        fSize={22}
        mb={0.7}
        placeholder="이름을 입력해주세요"
        value={input.name}
        onChange={(e) => onChange(e, 'name')}
      />
      <Label fSize={24}>이메일</Label>
      <Ninput
        type="email"
        width={423}
        height={63}
        fSize={22}
        mb={0.7}
        placeholder="이메일을 입력해주세요"
        value={input.email}
        onChange={(e) => onChange(e, 'email')}
      />
      <Label fSize={24}>비밀번호</Label>
      <Ninput
        type="password"
        width={423}
        height={63}
        fSize={22}
        mb={0.7}
        placeholder="비밀번호를 입력해주세요"
        value={input.password}
        onChange={(e) => onChange(e, 'password')}
      />
      <Label fSize={24}>비밀번호 확인</Label>
      <Ninput
        type="password"
        width={423}
        height={63}
        fSize={22}
        placeholder="비밀번호를 다시 입력해주세요"
        value={input.passwordC}
        onChange={(e) => onChange(e, 'passwordC')}
      />
      <RegisterGroup>
        <RedButton radius={30} fSize={23} moveX={1} isShadow onClick={onClick}>
          회원가입
        </RedButton>
        <SocialGroup />
      </RegisterGroup>
    </form>
  );
};

export default RegisterForm;
