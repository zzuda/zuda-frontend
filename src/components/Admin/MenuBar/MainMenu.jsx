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

`;

const MenuText = styled.li`
    text-align: center;
    
    font-size: 26px;
    font-weight: 600;
    color: #555;
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
        </Container>
    )
}
export default MainMenu;