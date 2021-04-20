import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterForm from './RegisterForm';

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
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    passwordC: '',
  });

  const onChange = (e, id) => {
    setInputs((prevState) => ({
      ...prevState,
      [id]: e.target.value,
    }));
  };

  const onClick = (e) => {
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
  };

  return (
    <Container>
      <RegisterForm input={inputs} onChange={onChange} onClick={onClick} />
    </Container>
  );
};

export default Register;
