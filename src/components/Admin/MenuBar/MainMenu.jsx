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