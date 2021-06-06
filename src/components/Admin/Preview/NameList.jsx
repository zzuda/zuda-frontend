import React, { useState } from 'react';
import styled from 'styled-components';
import RoomUserList from './RoomUserList';
import { SmallText } from '../../../atomic/Texts/index';
import { CountText } from '../../../atomic/AdminText/index';

const Container = styled.div`
    width: 300px;
    
    margin: 45px 32px;
    
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

    margin: 4em 0 3em 2em;
    
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
                <CountText>{ UserCount }</CountText>
            </All>
            <Room>
                <RoomUserList></RoomUserList>
            </Room>
        </Container>
    );
};

export default NameList;