import styled from 'styled-components';

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

  &:hover {
    transform: translateX(10px);
  }
`;

export default RedButton;
