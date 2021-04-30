import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';
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

const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    passwordC: '',
  };

  const [inputs, setInputs] = useState(initialState);

  const onChange = (e, id) => {
    setInputs((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  };

  const onClick = async (e) => {
    e.preventDefault();
    const { name, email, password, passwordC } = inputs;
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      passwordC.trim() === ''
    ) {
      console.log('공백오류');
      return;
    }
    if (password !== passwordC) {
      console.log('패스워드 불일치');
      return;
    }

    try {
      await Api.post('/auth/register', {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
      return;
    }

    setInputs(initialState);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <Container>
      <RegisterForm input={inputs} onChange={onChange} onClick={onClick} />
    </Container>
  );
};

export default Register;
