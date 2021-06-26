import React from 'react';
import styled from 'styled-components';
import UserCountImg from '../../../assets/Admin/UserCount.png';

const PersonCountSection = styled.div`
  cursor: pointer;

  width: 350px;
  height: 90px;

  display: flex;
  align-items: center;

  margin-top: 10px;

  border-radius: 18px;

  background-color: #fefefe;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    animation-duration: 0.3s;
  }
`;

const UserCount = styled.img`
  width: 40px;
  height: 40px;

  margin: 0 15px 0 20px;
`;

const CurrentUserText = styled.span`
  font-size: 31px;
  font-weight: bold;
  color: #6e6e6e;

  margin-bottom: 3px;
`;

const PercentageBar = styled.div`
  position: relative;

  width: 150px;
  height: 16px;

  margin-left: 20px;
  border-radius: 5px;
  background-color: #ececec;
`;

const Percentage = styled.div`
  position: absolute;

  width: 70%;
  height: 100%;

  background-color: #ff7676;
  border-radius: 5px;
`;

const PersonCount = () => {
  return (
    <PersonCountSection>
      <UserCount src={UserCountImg} />
      <CurrentUserText>23명</CurrentUserText>
      <PercentageBar>
        <Percentage />
      </PercentageBar>
    </PersonCountSection>
  );
};

export default PersonCount;
