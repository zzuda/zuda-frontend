import React, { useEffect } from "react";
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

const RoomUserList = () => {
    useEffect(() => {
        console.log("get시도!");

        const GetRoomData = async () =>{
            const res = await Api.get('http://localhost:8080/room');
            console.log(res.data.data[0].roomName);
        }
        GetRoomData();
    }, []);

    return (
    <>
        <Container>
            <TitleText></TitleText>
        </Container>
    </>
    )
};

export default RoomUserList;