import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import {Link } from "react-router-dom";


const Container = styled.div`
    height: 90px;
    background-color: rgb(248,247,243);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;


const Lewo = styled.div`
felx: 1;
display: flex;
align-items: center;

`;

const Image = styled.img`
height:80px;
width:80px;
`;


const Center = styled.div`
felx: 1;
text-align: center;

`;

const Logo = styled.h1`
font-weight: bold;
felx: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

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
            <Lewo>
            <Image src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/src/logo.jpg?token=GHSAT0AAAAAABTVTFI4AIR4WQKO2KOIXJBMYTZF2VQ" />
            </Lewo>
            <Center><Logo>Nails</Logo></Center>
            <Prawo>
               <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Register"}>
                 <Menu>Rejestracja</Menu>
                </Link>
        
              <AccessibilityNewIcon color="action" />
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Login"}>
              <Menu>Logowanie</Menu>
                  </Link>
              <Badge color="primary">
      <LoginIcon color="action" />
              </Badge>
            </Prawo>
        </Wrapper>
        </Container>
  )
}

export default Navbar