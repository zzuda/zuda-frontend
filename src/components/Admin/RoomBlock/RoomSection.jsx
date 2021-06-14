import React from 'react';
import styled, { keyframes } from 'styled-components';
import UserCountImg from '../../../assets/Admin/UserCount.png';
import AttendanceCheckImg from '../../../assets/Admin/Attendance Check.png';
import Graph from '../../../assets/Admin/Graph.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FlexWrap = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : "row")};
    justify-content: space-${(props) => props.mode};
`;

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
    width: 345px;
    height: 290px;
`;

const PersonCount = styled.div`
    cursor: pointer;
    
    width: 350px;
    height: 90px;

    display: flex;
    align-items: center;

    margin-top: 10px;

    border-radius: 18px;

    background-color: #fefefe; 
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.03);
        animation-duration: 0.3s;
    }
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

    margin-top: 17px;
    margin-left: 5px;

    border-radius: 20px;
    background-color: #fefefe;

    overflow: hidden;
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.03);
        animation-duration: 0.1s;
    }
    &:hover .changeColor1{
        filter: invert(79%) sepia(70%) saturate(3336%) hue-rotate(312deg) brightness(101%) contrast(100%);
    }
    &:hover .changeColor2{
        filter: invert(57%) sepia(57%) saturate(1107%) hue-rotate(316deg) brightness(140%) contrast(97%);
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

const FileuploadCount = styled.div`
    cursor: pointer;

    width: 180px;
    height: 130px;

    margin-top: 17px;

    border-radius: 20px;
    background-color: #fff;
    
    transition: 0.3s ease-in-out;
    &:hover{
        transform: scale(1.03);
        animation-duration: 0.3s;
    }
`;
const CircularBarWrap = styled.div`
    width: 90px;

    padding-top: 25px;
    padding-left: 10px;
`;
const CircularText = styled.span`
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;

    font-size: ${(props) => (props.fSize ? props.fSize : 14)}px;
    font-weight: ${(props) => (props.fWeight ? props.fWeight : 400)};
    color: #858585;

    line-height: 20px;

    text-align: center;
`;


const RoomEvent = styled.div`
    cursor: pointer;

    width: 180px;
    height: 55px;

    margin-top: 14px;

    border-radius: 15px;
    background-color: #fff;
`;

const ChangeRoomName = styled.div`
    width: 90px;
    height: 55px;

    border-right: 1px solid #e2e2e2;
    border-radius:15px 0 0 15px;

    transition: 0.3s ease-in-out;

    font-weight:700;
    font-size: 14px;
    
    line-height: 55px;
    text-align: center;

    color: #535353;
    &:hover{
        background-color: #e2e2e2;
    }
`;

const DeleteRoom = styled.div`
    width: 90px;
    height: 55px;
    
    border-radius:0 15px 15px 0;
    
    transition: 0.3s ease-in-out;

    font-weight:700;
    font-size: 14px;
    
    line-height: 55px;
    text-align: center;

    color: #ff5c5c;
    &:hover{
        border: 1px solid #ff6565;
        background-color: #ffbbbb;
    }
`;


const RoomSection = () => {
    const percentage = 66;

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
                        <FlexWrap mode={"between"}>
                            <Attendance>
                                <AttendanceCheckIcon className="changeColor1" src={AttendanceCheckImg}/>
                                <AttendanceText>출석 관리</AttendanceText>
                                <AttendanceGraph className="changeColor2" src={Graph}/>
                            </Attendance>
                            <FlexWrap direction={"column"}>
                                <FileuploadCount>
                                    <FlexWrap direction={"row"}>
                                        <CircularBarWrap>
                                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                        </CircularBarWrap>
                                        <FlexWrap direction={"column"}>
                                            <CircularText fSize={14} marginTop={40} marginLeft={15}>파일제출</CircularText>
                                            <CircularText fSize={25} fWeight={600} marginLeft={15}>15명</CircularText>
                                        </FlexWrap>
                                    </FlexWrap>
                                </FileuploadCount>
                                <RoomEvent>
                                    <FlexWrap>
                                        <ChangeRoomName>방 이름변경</ChangeRoomName>
                                        <DeleteRoom>방 삭제</DeleteRoom>
                                    </FlexWrap>
                                </RoomEvent>
                            </FlexWrap>
                        </FlexWrap> 
                    </Content>
                </RoomBlock>
        </Container>
    )
}

export default RoomSection;