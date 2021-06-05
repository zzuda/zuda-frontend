import React, { useEffect } from "react";
import styled from 'styled-components';
import Api from '../../../Api/index';

const LoeadedList = () => {
    

    useEffect(() => {
        console.log("get시도!");

        const GetRoomData = async () =>{
            const res = await Api.get('http://localhost:8080/room');
            console.log(res.data.data[0].roomName);
        }
        GetRoomData();
    }, []);

    return <div>test</div>
};

export default LoeadedList;