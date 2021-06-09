import styled from 'styled-components';

export const Card = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: #f6f6f6;
  box-shadow: 3px 3px 24px #c9c9c9, -18px -18px 36px #ffffff;
  border-radius: 30px;
  position: relative;
  grid-row: ${(props) => props.rStart / props.rEnd};
  grid-column: ${(props) => props.cStart / props.cEnd};
`;

export const InnerCard = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: #eee;
  border-radius: 30px;
  position: relative;
  grid-row: ${(props) => props.rStart / props.rEnd};
  grid-column: ${(props) => props.cStart / props.cEnd};
`;

export const InnerText = styled.h3`
  font-family: 'NanumSquare', sans-serif;
  font-size: ${(props) => (props.fSize ? props.fSize : 14)}px;
  color: #919191;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  bottom: ${(props) => props.btm}px;
  right: ${(props) => props.right}px;
`;
