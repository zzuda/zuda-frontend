import styled from 'styled-components';

export const SmallText = styled.h3`
  font-size: ${(props) => (props.fSize ? props.size : 16)}px;
  color: ${(props) => (props.color ? props.color : '#717171')};
`;
