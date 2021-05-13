import React from 'react';
import styled from  'styled-components';

const Container = styled.div`
    width: 100%;
    height: 77%;
    background-color: #e8e8e8;
`;

const SearchBar = styled.input`
    border: none;
    
    margin: 0 auto;
    margin-top:20px;
    margin-left: 105px;
`;

const MenuText = styled.li`
    text-align: center;
    
    font-size: 28px;
    color: #555;
`;


const MainMenu = () => {
    return(
        <Container>
            <SearchBar/>
            <ul>
                <MenuText>fasdfadsfasf</MenuText>
                <MenuText>fasdfadsfasf</MenuText>
                <MenuText>fasdfadsfasf</MenuText>
            </ul>
        </Container>
    )
}
export default MainMenu;