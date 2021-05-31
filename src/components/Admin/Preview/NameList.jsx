import React, { useState } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
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

    padding-right: 80px;
    /* line-height: 50%; */
    
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
        <Frame>
            <All>
                <TitleText>전체</TitleText>
                <Count>{ UserCount }</Count>
            </All>
            <Room>
                
            </Room>
        </Frame>
    );
};

export default NameList;