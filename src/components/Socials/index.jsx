import React from 'react';
import SocialButton from '../../atomic/buttons/SocialButton';
import GoogleI from '../../assets/Socials/google_icon.png';
import FaceBookI from '../../assets/Socials/Facebook_Icon.png';
import KakaoI from '../../assets/Socials/kakaoTalk_Icon.png';
import NaverI from '../../assets/Socials/Naver_Icon.png';
import ButtonGroup from '../ButtonGroup';

export const Google = () => <SocialButton img={GoogleI} alt="Google" />;

export const FaceBook = () => <SocialButton img={FaceBookI} alt="Facebook" />;

export const Kakao = () => <SocialButton img={KakaoI} alt="Kakaotalk" />;

export const Naver = () => <SocialButton img={NaverI} alt="Naver" />;

export const SocialGroup = () => {
  return (
    <ButtonGroup>
      <Google />
      <FaceBook />
      <Kakao />
      <Naver />
    </ButtonGroup>
  );
};
