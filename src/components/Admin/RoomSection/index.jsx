import React from 'react';
import styled from 'styled-components';
import { FlexWrap } from "../../../atomic/CssFlex";

import Title from "../RoomSection/Title";
import PersonCount from "../RoomSection/PersonCount";
import Attendace from "../RoomSection/Attendance";
import FileuploadCount from "../RoomSection/FileuploadCount";
import RoomEvent from "../RoomSection/RoomEvent";

const Container = styled.div`
    width: 1186px;
    height: 1040px;

    padding-top: 1em;
    padding-left: 8em;
    padding-bottom: 11em;
    
    display: flex;
    flex-wrap: wrap;

    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const RoomBlock = styled.div`
    display: block;

    width: 390px;
    height: 380px;

    padding-top: 0.7em;
    padding-left: 1.2em;
    padding-right: 2.4em;
    
    margin-top: 50px;

    border-radius: 18px;
    background-color: #ececec;

    transition: 0.3s all;
    &:hover{
        transform: scale(1.03);
        box-shadow: 34px 16px 70px -10px #00000030;
        -webkit-box-shadow: 34px 26px 70px -10px #00000036;
        -moz-box-shadow: 34px 26px 70px -10px #0000007d;

        background-color: #e9e9e9;
    }
    &:nth-child(odd){
        margin-right: 80px;
    }
`;

const Content = styled.div`
    width: 345px;
    height: 290px;
`;


const RoomSection = () => {
    return(
        <Container>
            <RoomBlock>
                <Title />
                <Content>
                        
                    <PersonCount />
                    <FlexWrap mode={"between"}>
                    <Attendace />
                        
                        <FlexWrap direction={"column"}>
                            <FileuploadCount />
                            <RoomEvent />
                        </FlexWrap>

                    </FlexWrap> 
                </Content>
            </RoomBlock>
        </Container>
    )
}

export default RoomSection;