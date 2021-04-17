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
`;

export default RedButton;
