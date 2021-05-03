import React from 'react';
import Api from '../../../Api';
import styled from 'styled-components';
import axios from 'axios';

const SocialButtonContainer = styled.button`
  width: 52px;
  height: 52px;
  border: none;
  background-color: #e5e5e5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 14px 14px 39px #cecece, -14px -14px 39px #ffffff;
  user-select: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  & img {
    width: 30px;
    height: 30px;
  }
`;


const SocialButton = ({ img, alt }) => {
  
  const socialLogin = async () => {
    try {
      const res = await Api.get('/auth/kakao');
      console.log(res);
      console.log("test");
    } catch (err) {
      // if (!err.response.data) {
      //   return;
      // }

    }
  }

  return (
    <SocialButtonContainer onClick={socialLogin}>
      <img src={img} alt={alt} />
    </SocialButtonContainer>
  );
};

export default SocialButton;
