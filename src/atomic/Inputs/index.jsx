import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  color: #5d5d5d;
  font-weight: bold;
  font-size: ${(props) => (props.fSize ? props.fSize : 32)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0.5)}rem;
`;

export const Ninput = styled.input`
  width: ${(props) => (props.width ? props.width : 523)}px;
  height: ${(props) => (props.height ? props.height : 73)}px;
  border: none;
  font-family: 'NanumSquare', sans-serif;
  font-size: ${(props) => (props.fSize ? props.fSize : 28)}px;
  font-weight: lighter;
  color: #a0a0a0;
  padding: 1rem 3rem;
  margin-bottom: ${(props) => (props.mb ? props.mb : 1.8)}rem;
  border-radius: 139px;
  background: #e7e7e7;
  box-shadow: 22px 22px 44px #c4c4c4, -22px -22px 44px #ffffff;
  outline: none;
  transition: all 0.3s;

  &[type='password'] {
    font-family: 'Noto Sans KR', sans-serif;
    &::placeholder {
      font-family: 'NanumSquare', sans-serif;
    }
  }

  &:hover {
    transform: scale(1.015);
  }
`;
