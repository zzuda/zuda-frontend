import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Api from '../../../Api/index';
import name from 'module';

const Container = styled.div`
    width: 300px;
`;
const TitleText = styled.h3`
    color: #585858;
    font-size: 27px;
`;
const Wrap = styled.div`

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
                        <TitleText>
                            {x.data}
                            </TitleText>
                    </Wrap>
                )
        )
    }

    return (
    <>
        <Container>
            <TitleText>
                <div>{roomData()}</div>
            </TitleText>
        </Container>
    </>
    )
};

export default RoomUserList;