import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';


const Container = styled.div`
    height: 60px;
    background-color: #EDE4EE;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Lewo = styled.div`
felx: 1;
`;

const Logo = styled.h1`
font-weight: bold;
`

const Center = styled.div`
felx: 1;
`;

const Prawo = styled.div`
felx: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`;

const Menu = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 20px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Lewo>Lewo</Lewo>
            <Center><Logo>BB Nails</Logo></Center>
            <Prawo>
              <Menu>Rejestracja</Menu>
              <AccessibilityNewIcon color="action" />
              <Menu>Zaloguj</Menu>
              <Badge color="primary">
      <LoginIcon color="action" />
              </Badge>
            </Prawo>
        </Wrapper>
        </Container>
  )
}

export default Navbar