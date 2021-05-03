import React from 'react';
import styled from 'styled-components';
import Api from '../../../Api';

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
    // console.log("test");
    // try {
    //   const res = await Api.post('/auth/kakao');
    //   // console.log(res);
    // } catch (error) {
    //   return;
    // }
    
    // if(alt === "Google"){
    //   console.log("Google");
    // }
    // if(alt === "Facebook"){
    //   console.log("Facebook");
    // }
    // if(alt === "Kakaotalk"){
    //   console.log("Kakaotalk");
    // }
    // if(alt === "Naver"){
    //   console.log("Naver");
    // }
  }

  return (
    <SocialButtonContainer onClick={socialLogin}>
      <a href="http://localhost:8080/auth/naver"><img src={img} alt={alt} /></a>
    </SocialButtonContainer>
  );
};

export default SocialButton;
