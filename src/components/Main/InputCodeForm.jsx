import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 503px;
  height: 70px;

  padding: 0 3rem;
  margin-left: 0.3rem;

  font-size: 20px;
  font-family: 'NanumSquare', sans-serif;
  background: #ebebeb;
  box-shadow: 18px 18px 36px #c9c9c9, -18px -18px 36px #ffffff;

  border: none;
  border-radius: 50px;
  outline: none;
`;

const InputCodeFrom = ({ onChange, input, placeholder }) => {
  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={input}
      />
    </>
  );
};

export default InputCodeFrom;
