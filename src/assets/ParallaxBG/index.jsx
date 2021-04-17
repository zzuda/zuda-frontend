import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';
import bgImage1 from './Main_Page_Depth-1_resize.png';
import bgImage2 from './Main_Page_Depth-2_resize.png';
import bgImage3 from './Main_Page_Depth-3_resize.png';

const Container = styled.div`
  width: 1920px;
  height: 1040px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  transform: scale(0.97);
  top: -40px;
  left: -100px;
`;

const ParallaxBG = ({ children }) => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene);
  }, []);

  return (
    <Container id="scene">
      <div data-depth="0.6">
        <Image src={bgImage3} alt="1" />
      </div>
      <div data-depth="0.4">
        <Image src={bgImage2} alt="2" />
      </div>
      <div data-depth="0.2">
        <Image src={bgImage1} alt="3" />
      </div>
      {children}
    </Container>
  );
};

export default ParallaxBG;
