import styled from 'styled-components';

const NanumText = styled.p`
  font-family: 'NanumSquare', sans-serif;
  font-size: ${(props) => (props.fSize ? props.fSize : 16)}px;
  font-weight: ${(props) => (props.fWeight ? props.fWeight : 'normal')};
  color: ${(props) => (props.color ? props.color : '#333')};
`;

export default NanumText;
