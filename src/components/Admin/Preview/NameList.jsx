import React, { useState } from 'react';
import styled from 'styled-components';
import RoomUserList from './RoomUserList';
import { SmallText } from '../../../atomic/Texts/index';

const Container = styled.div`
    width: 300px;
    
    margin: 45px 20px;
`;

const TitleText = styled.h3`
    color: #585858;
    font-size: 27px;
`;

const All = styled.div`
    display: flex;
    justify-content: space-between;

    width: 280px;

    padding-right: 30px;
    line-height: 50%;

    margin: 4em 0 0 2em;
    
`;

const Count = styled.span`
    color: #717171;
    
    font-size: 16px;
    font-weight: 600;
`;

const Room = styled.div`
    
`;


const NameList = () => {

    const [UserCount, setUserCount] = useState(129)

    return(
        <Container>
            <SmallText>유저 LIST</SmallText>
            <All>
                <TitleText>전체</TitleText>
                <Count>{ UserCount }</Count>
            </All>
            <Room>
                <RoomUserList></RoomUserList>
            </Room>
        </Container>
    );
};

export default NameList;