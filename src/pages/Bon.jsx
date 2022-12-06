import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import "../ServiceDesign.css"
import {Link } from "react-router-dom";
import { mobile } from "../responsive";

//background-image: url(https://img.freepik.com/free-vector/gradient-pastel-sky-background_23-2148908629.jpg?w=2000);

const Container = styled.div`
${mobile({ textAlign: "center" })}
${mobile({ width:"100%", scale:"1" })}
`;
const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
${mobile({ textAlign: "center" })}
${mobile({ width: "80%" })}
`;

const Consultation = styled.div`
background-color: #000000;
padding: 40px 0px 40px 0px;
display: flex;
margin-right: auto;
margin-left: auto;
position: relative;
opacity: 0.7;
transition: 0.5s ease-out;

&:hover { 
  opacity:1;
  transition: 0.5s ease-out;
}
`;

const Info = styled.div`
padding: 40px 100px 40px 0px;
display: flex;
margin-right: auto;
margin-left: auto;
position: relative;
width:60%;
font-size:22px;
font-family: monospace;
`;

const Image = styled.image`
padding: 20px 100px 40px 0px;
display: flex;
margin-right: auto;
position: relative;
width:40%;
height:40vh;
`;


const H2 = styled.h2`
color: #ffffff;
padding: 40px 0px 40px 0px;
margin: 20px;
font-family: monospace;
`;

const Button = styled.button`
  border: none;
  background-color: #ffffff;
  color: black;
  font-size: 18px;
  padding: 20px 40px;
  border-radius: 5px;
  font-size: 30px;
`;

const Bon = () => {

  
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
   
  return (
    <Container>
        <Navbar/>
        <Nav></Nav>
        <section class="section services-section" id="services">
    <div class="hede">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Bon podarunkowy</h2>
                </div>
            </div>
        </div>
        </div>
        </section>
        <Info>
        Szukasz uniwersalnego i wyjątkowego prezentu?
        Bon upominkowy na dowolną kwotę, bądź usługę będzie idealnym rozwiązaniem.
        Możesz wybrać spośród oferowanych przez nas zabiegów i usług lub zakupić voucher na wybraną przez siebie kwotę.
        Zakupiony u nas bon jest ważny przez 1 rok od daty zakupu. O wszystkich szczegółach dowiesz się w naszym salonie - możesz to uczynić poniżej, za pomocą formularza kontaktowego.
        <Image>
          <img src='https://fotoomnia.com/zdjecia/thu/ec21e9c6df3a7e60fb94daf8ef670686.jpg'/>
        </Image>
        </Info>
        <Consultation>
        <H2>Spraw przyjemność sobie lub komuś bliskiemu i zarezerwuj termin na konsultację</H2>
        <Link style={{ all:'inherit', opacity:1}} to={"/ContactUs"}>
          <Button>Umów wizytę</Button></Link>
        </Consultation>
        <Footer/>
    </Container>
  )
}

export default Bon
