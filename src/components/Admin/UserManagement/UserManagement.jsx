import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 1164px;
    height: 1040px;

    padding-top: 70px;
    padding-left: 75px;
`;

const Room = styled.div`

`;

const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 360px;
    height: 40px;
`;

const RoomName = styled.span`
    font-size: 37px;
    font-weight: 800;

    color: #414146;
`;

const TitleLine = styled.div`
    width: 55px;
    height: 4px;

    margin-top: 0.6em;
    background-color: #737373;
`;

const UserCount = styled.p`
    font-size: 28px;
    font-weight: 600;

    margin-top: 0.2em;
    color: #414146;
`;

const UserManagement = () => {
    return (
        <Container>
            <Room>
                <TitleSection>
                    <RoomName>ROOMNAME!</RoomName>
                    <TitleLine />
                    <UserCount>23</UserCount>
                </TitleSection>
            </Room>
        </Container>
    )
}

export default UserManagement;