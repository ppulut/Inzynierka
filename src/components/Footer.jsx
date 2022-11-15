import { Facebook, Instagram, Twitter, Phone, MailOutline } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";
import { mobile } from '../responsive';


//background-image: url(https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908629.jpg?w=2000);


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`

const Lewo = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 15px;
`

const Logo = styled.h1`

`

const Opis = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;


`

const MediaIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 20%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const Prawo = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 25px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: circle
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 70%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
       <Lewo>
            <Logo>BB Nails</Logo>
            <Opis>Zapraszamy do obserwowania nas na social mediach</Opis>
            <SocialContainer>
                <MediaIcon color="1B74E4"> 
                    <Facebook/>
                </MediaIcon>
                <a href='https://www.instagram.com/carollisee_nails/'><MediaIcon color="E4405F">
                    <Instagram/>
                </MediaIcon></a>
                <MediaIcon color="55ACEE">
                    <Twitter/>
                </MediaIcon>
            </SocialContainer>
       </Lewo>

       <Center>
       <Title>Przydatne linki</Title>
        <List>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/PriceList"}>
          <ListItem>Cennik</ListItem></Link>

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Gallery"}>
          <ListItem>Galeria</ListItem></Link>

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/PROBLEMS"}>
          <ListItem>Wyszukiwarka problemów</ListItem></Link>

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Services"}>
          <ListItem>Usługi</ListItem></Link>

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/ContactUs"}>
          <ListItem>Kontakt</ListItem></Link>
        </List>
       </Center>

       <Prawo>
       <Title>Kontakt</Title>
    
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +69 2137 420
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> kontakt@kontakt.pl
        </ContactItem>
       </Prawo>
    </Container>
  )
}

export default Footer
