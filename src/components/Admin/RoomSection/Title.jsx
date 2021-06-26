import React from 'react';
import styled from 'styled-components';

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const RoomName = styled.span`
  color: #414141;

  font-size: 23px;
  font-weight: 800;
`;

const CreatedDate = styled.span`
  padding-bottom: 4px;

  font-size: 11px;

  color: #969696;
`;

const Title = () => {
  return (
    <TitleSection>
      <RoomName>ROOM NAME1</RoomName>
      <CreatedDate>2021-08-21 개설됨</CreatedDate>
    </TitleSection>
  );
};

export default Title;
