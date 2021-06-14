import React from 'react';
import styled from 'styled-components';
import UserCountImg from '../../../assets/Admin/UserCount.png';
import AttendanceCheckImg from '../../../assets/Admin/Attendance Check.png';
import Graph from '../../../assets/Admin/Graph.png';

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
        box-shadow: 34px 26px 94px -10px #00000030;
        -webkit-box-shadow: 34px 26px 94px -10px #00000036;
        -moz-box-shadow: 34px 26px 94px -10px #0000007d;

        background-color: #e9e9e9;
    }
    &:nth-child(odd){
        margin-right: 80px;
    }
`;
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;


const RoomName = styled.span`
    color: #414141;
    
    font-size: 23px;
    font-weight: 800;
`;

const CreatedDate = styled.span`
    padding-bottom: 4px;
    
    font-size: 11px;

    color: #969696;
`;

const Content = styled.div`
    width: 315px;
    height: 290px;
`;

const PersonCount = styled.div`
    width: 350px;
    height: 90px;

    display: flex;
    align-items: center;

    margin-top: 10px;

    border-radius: 18px;

    background-color: #fefefe;
`;

const UserCount = styled.img`
    width: 40px;
    height: 40px;

    margin: 0 15px 0 20px;
`;

const CurrentUserText = styled.span`
    font-size: 31px;
    font-weight: bold;
    color: #6e6e6e;

    margin-bottom: 3px;
`;

const PercentageBar = styled.div`
    position: relative;
    
    width: 150px;
    height: 16px;

    margin-left: 20px;
    border-radius: 5px;
    background-color: #ececec;
`;

const Percentage = styled.div`
    position: absolute;

    width: 70%;
    height: 100%;

    background-color: #ff7676;
    border-radius: 5px;
`;

const Attendance = styled.div`
    cursor: pointer;

    width: 135px;
    height: 200px;
    
    transition: 0.3s ease-in-out;

    margin-top: 17px;
    margin-left: 5px;

    border-radius: 20px;
    background-color: #fefefe;

    overflow: hidden;

    &:hover{
        transform: scale(1.03);
        animation-duration: 0.3s;
    }
`;

const AttendanceCheckIcon = styled.img`
    width: 30px;
    height: 30px;
    
    display: block;
    margin: 0 auto;
    
    transform: translateY(115%);
`;

const AttendanceText = styled.p`
    color: #858585;
    text-align: center;

    transform: translateY(150%);
`;

const AttendanceGraph = styled.img`
    width: 155px;
    height: 85px;
    
    display: block;
    margin: 0 auto;
    
    margin-top: 70px;
    margin-left: -12px;
`;

const RoomSection = () => {
    return(
        <Container>
                <RoomBlock>
                    <Title>
                        <RoomName>ROOM NAME1</RoomName>
                        <CreatedDate>2021-08-21 개설됨</CreatedDate>
                    </Title>
                    <Content>
                        <PersonCount>
                            <UserCount src={UserCountImg}/>
                            <CurrentUserText>23명</CurrentUserText>
                            <PercentageBar><Percentage/></PercentageBar>
                        </PersonCount>
                        <Attendance>
                            <AttendanceCheckIcon src={AttendanceCheckImg}/>
                            <AttendanceText>출석 관리</AttendanceText>
                            <AttendanceGraph src={Graph}/>
                        </Attendance>
                    </Content>
                </RoomBlock>
                
                <RoomBlock>
                    <RoomName>ROOM NAME2</RoomName>
                </RoomBlock>
                <RoomBlock>
                    <RoomName>ROOM NAME3</RoomName>
                </RoomBlock>
                <RoomBlock>
                    <RoomName>ROOM NAME4</RoomName>
                </RoomBlock>

                <RoomBlock>
                    <RoomName>ROOM NAME5</RoomName>
                </RoomBlock><RoomBlock>
                    <RoomName>ROOM NAME6</RoomName>
                </RoomBlock>
                <RoomBlock>
                    <RoomName>ROOM NAME</RoomName>
                </RoomBlock>
                <RoomBlock>
                    <RoomName>ROOM NAME</RoomName>
                </RoomBlock>
        </Container>
    )
}

export default RoomSection;