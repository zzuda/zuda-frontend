import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Api from '../../../Api/index';
import { CountText } from '../../../atomic/AdminText/index';

const Container = styled.div`
    width: 300px;
    height: 700px;
    
    -ms-overflow-style: none;
    overflow: scroll;
    
    &::-webkit-scrollbar { 
        display: none;
    }
`;

const TitleText = styled.h3`
    color: #585858;
    font-size: 27px;
`;

const Wrap = styled.div`
    margin: 3rem 0 0 0.8rem;
`;

const TitleAndCount = styled.div`
    display: flex;
    justify-content: space-around;
    line-height: 50%;

`;

const RoomLine = styled.div`
    width: ${(props) => props.width }px;
    height: 2px;

    margin-top: 8px;
    background-color: #bdbdbd;
`;

const RoomUserList = () => {
    const [roomName, setRoomName] = useState([]);
    console.log(roomName);

    useEffect(() => {
        console.log("get시도");

        const GetRoomData = async () =>{
            const res = await Api.get('/room');
            const responseData = res.data.data
            
            responseData.forEach((value, index) => {
                setRoomName((prevRoomName) => ([
                    ...prevRoomName, {
                        "id" : index, 
                        "data" : value.roomName
                    }
                ]));
            });
        }
        GetRoomData();
    }, []);

    const roomData = () => {
        return(
                roomName.map(x => 
                    <Wrap>
                        <TitleAndCount>
                            <TitleText>{x.data}</TitleText>
                            <RoomLine width={90}></RoomLine>
                            <CountText>26</CountText>
                        </TitleAndCount>
                    </Wrap>
                )
        )
    }

    return (
    <>
        <Container>
            <TitleText>
                <>{roomData()}</>
            </TitleText>
        </Container>
    </>
    )
};

export default RoomUserList;