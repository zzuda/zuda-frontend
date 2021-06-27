import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FlexWrap } from '../../../atomic/CssFlex';

const FileuploadCountSection = styled.div`
  cursor: pointer;

  width: 180px;
  height: 130px;

  margin-top: 17px;

  border-radius: 20px;
  background-color: #fff;

  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    animation-duration: 0.3s;
  }
`;
const CircularBarWrap = styled.div`
  width: 90px;

  padding-top: 25px;
  padding-left: 10px;
`;

const CircularText = styled.span`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;

  font-size: ${(props) => (props.fSize ? props.fSize : 14)}px;
  font-weight: ${(props) => (props.fWeight ? props.fWeight : 400)};
  color: #858585;

  line-height: 20px;

  text-align: center;
`;

const FileuploadCount = () => {
  const percentage = 66;

  return (
    <FileuploadCountSection>
      <FlexWrap direction={'row'}>
        <CircularBarWrap>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </CircularBarWrap>

        <FlexWrap direction={'column'}>
          <CircularText fSize={14} marginTop={40} marginLeft={15}>
            파일제출
          </CircularText>
          <CircularText fSize={25} fWeight={600} marginLeft={15}>
            15명
          </CircularText>
        </FlexWrap>
      </FlexWrap>
    </FileuploadCountSection>
  );
};

export default FileuploadCount;
