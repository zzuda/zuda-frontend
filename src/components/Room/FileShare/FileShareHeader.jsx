import React from 'react';
import styled from 'styled-components';
import NanumText from '../../../atomic/Texts/NanumText';

const Container = styled.div`
  width: 100%;
  height: 45px;
  line-height: 45px;
`;

const FileShareHeader = () => {
  return (
    <Container>
      <NanumText fSize={32} fWeight={'bold'}>
        파일공유
      </NanumText>
      <NanumText fSize={22}>
        ( 파일 업로드 후 파일공유 창을 다시 켜주셔야 파일이 갱신됩니다! )
      </NanumText>
    </Container>
  );
};

export default FileShareHeader;
