import styled, { css } from 'styled-components';

const RedButton = styled.button`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  background-color: #ff5f5f;
  color: #e3e3e3;
  border: none;
  border-radius: ${(props) => props.radius + 'px'};
  font-size: ${(props) => props.fSize + 'px'};
  font-weight: bold;
  box-shadow: ${(props) =>
    props.isShadow
      ? '22px 22px 44px #c4c4c4, -22px -22px 44px #ffffff'
      : 'none'};
  cursor: pointer;
  outline: none;
  transition: transform 0.3s;

  ${(props) =>
    props.moveX &&
    css`
      transform: translateX(${(props) => props.moveX + 'px'});
      
      &:hover {
      transform: translateX(${(props) => props.moveX + 10 + 'px'});
      background-color: #ff4343;
      }
    `}
  

  
`;

export default RedButton;
