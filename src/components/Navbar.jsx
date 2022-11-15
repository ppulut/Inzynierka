import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import {Link } from "react-router-dom";
import { mobile } from '../responsive';


const Container = styled.div`
    height: 90px;
    background-color: rgb(248,247,243);
    ${mobile({ width:"device-width", scale:"1" })}
    
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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
${mobile({ fontSize: "24px" })}

position: relative;
animation: myfirst 2s 1;
animation-direction: alternate;
-webkit-animation-name: spin;
animation-name: spin;

@-ms-keyframes spin {
  from { -ms-transform: rotate(0deg); }
  to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`

const Prawo = styled.div`
felx: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const Menu = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 20px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

/* Logowanie i rejestraca
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
              */


const Navbar = () => {


  return (
    <Container>
        <Wrapper>
            <Lewo>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/"}>
            <Image src="https://i.pinimg.com/736x/83/b2/82/83b2825829edac683f3d8ff3c025e479.jpg" alt="logo" />
            </Link>
            </Lewo>
            <Center><Logo>Nails</Logo></Center>
            <Prawo>
            </Prawo>
        </Wrapper>
        </Container>
  )
}

export default Navbar