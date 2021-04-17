import React from 'react';
import ParallaxBG from '../assets/ParallaxBG';
import styled from 'styled-components';
import Login from '../components/Login';

const MainPage = () => {
  return (
    <ParallaxBG>
      <Login />
    </ParallaxBG>
  );
};

export default MainPage;
