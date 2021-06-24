import React from "react";
import styled from "styled-components";
import AttendanceCheckImg from '../../../assets/Admin/Attendance Check.png';
import Graph from '../../../assets/Admin/Graph.png';

const AttendanceSection = styled.div`
    cursor: pointer;

    width: 135px;
    height: 200px;

    margin-top: 17px;
    margin-left: 5px;

    border-radius: 20px;
    background-color: #fefefe;

    overflow: hidden;
    transition: 0.3s ease-in-out all;
    animation-duration: 0.1s;
    &:hover{
        transform: scale(1.03);
    }
    &:hover .changeColor1{
        filter: invert(79%) sepia(70%) saturate(3336%) hue-rotate(312deg) brightness(101%) contrast(100%);
    }
    &:hover .changeColor2{
        transform: scaleX(1.15) translateY(2px);
    }
`;

const AttendanceCheckIcon = styled.img`
    width: 30px;
    height: 30px;
    
    display: block;
    margin: 0 auto;
    
    transform: translateY(115%);
    transition: 0.5s ease-in-out all;
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

    transition: 0.3s ease-in-out all;
`;


const Attendance = () => {
    return(
        <AttendanceSection>
            <AttendanceCheckIcon className="changeColor1" src={AttendanceCheckImg}/>
            <AttendanceText>출석 관리</AttendanceText>
            <AttendanceGraph className="changeColor2" src={Graph}/>
        </AttendanceSection>
    )
}

export default Attendance;