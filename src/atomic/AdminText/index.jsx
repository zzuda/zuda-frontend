import styled from 'styled-components';

export const CountText = styled.span`
    color: #717171;
    
    font-size: ${(props) => (props.fSize ? props.fSize : 16)}px;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
    font-weight: 600;
`;