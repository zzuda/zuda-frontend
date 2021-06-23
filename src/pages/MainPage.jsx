import React, { useState } from 'react';
import ParallaxBG from '../assets/ParallaxBG';
import styled from 'styled-components';
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';
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

const SwitchingComponent = ({ page }) => {
  if (!page) {
    return <div>로딩중..</div>;
  }
  if (page === 'main') {
    return <Main />;
  }
  if (page === 'login') {
    return <Login />;
  }
  if (page === 'register') {
    return <Register />;
  }
};

const MainPage = () => {
  const [page, setPage] = useState('login');

  return (
    <Container>
      <Logo src={logo} alt="zuda_logo" onClick={() => setPage(page)} />
      <SwitchingComponent page={page} />
      <ParallaxBG />
    </Container>
  );
};

export default MainPage;
