import styled from 'styled-components';

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: space-${(props) => props.mode};
`;
