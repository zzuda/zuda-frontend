import React from 'react';
import styled from  'styled-components';

const Container = styled.div`
    width: 100%;
    height: 77%;
    background-color: #e8e8e8;
    padding-top:40px;
`;

const SearchBar = styled.input`
    border: none;
    display: block;

    width: 200px;
    height: 20px;
    
    margin: 0 auto;
`;

const MenuFrame = styled.ul`
    margin: 0 auto;
    margin-top: 140px;

    width: 250px;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const MenuText = styled.li`
    /* text-align: center; */
    list-style: none;
    
    font-size: 26px;
    font-weight: 600;
    color: #555;
`;

const HelpMenuFrame = styled.ul`
    margin: 0 auto;
    margin-top: 7rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 240px;
    height: 100px;
`;

const HelpText = styled.p`
    color: #717171;
    font-weight: 600;
`;


const MainMenu = () => {
    return(
        <Container>
            <SearchBar/>
            <MenuFrame>
                <MenuText>방관리</MenuText>
                <MenuText>출석관리</MenuText>
                <MenuText>파일 공유 관리</MenuText>
            </MenuFrame>
            <HelpMenuFrame>
                <HelpText>도움말</HelpText>
                <HelpText>주다 서비스</HelpText>
                <HelpText>연락처</HelpText>
            </HelpMenuFrame>
        </Container>
    )
}
export default MainMenu;