import styled from 'styled-components';

export const Card = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #f6f6f6;
  box-shadow: 3px 3px 24px #c9c9c9, -18px -18px 36px #ffffff;
  border-radius: 30px;
`;

export const InnerCard = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #eee;
  border-radius: 30px;
`;
