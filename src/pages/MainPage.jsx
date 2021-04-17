import React, { useState } from 'react';
import ParallaxBG from '../assets/ParallaxBG';
import styled from 'styled-components';
import Login from '../components/Login';
import logo from '../assets/LOGO.png';

const Container = styled.div`
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 255px;
  left: 300px;
  width: 338px;
`;

const SwitchingComponent = () => {
  const [page, setPage] = useState('login');

  if (!page) {
    return <div>로딩중..</div>;
  }
  if (page === 'main') {
    return;
  }
  if (page === 'login') {
    return <Login />;
  }
  if (page === 'register') {
    return;
  }
};

const MainPage = () => {
  return (
    <Container>
      <Logo src={logo} alt="zuda_logo" />
      <SwitchingComponent />
      <ParallaxBG />
    </Container>
  );
};

export default MainPage;
