import React from 'react'
import '../Gallery.css';
import styled from 'styled-components'
import Footer from './Footer';
import { mobile } from "../responsive";

const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
${mobile({ visibility:"hidden" })}
`

const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
width:100%;
position: relative; 
left:110px;
${mobile({ width:"device-width", scale:"1.2" })}
  `




const Galeria = () => {

    return (
        <Container>
          <Nav>Galeria</Nav>
          <div class="con">
          <div class="uls">
          <div class="divs"><img alt="1" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/1.jpg"/></div>
          <div class="divs"><img alt="2" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/2.jpg"/></div>
          <div class="divs"><img alt="3" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/3.jpg"/></div>
          <div class="divs"><img alt="4" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/4.jpg"/></div>
          <div class="divs"><img alt="5" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/5.jpg"/></div>
          <div class="divs"><img alt="6" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/6.jpg"/></div>
          <div class="divs"><img alt="7" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/7.jpg"/></div>
          <div class="divs"><img alt="8" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/8.jpg"/></div>
          <div class="divs"><img alt="9" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/9.jpg"/></div>
          <div class="divs"><img alt="10" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/10.jpg"/></div>
          <div class="divs"><img alt="11" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/11.jpg"/></div>
          <div class="divs"><img alt="12" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/12.jpg"/></div>
          <div class="divs"><img alt="13" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/13.jpg"/></div>
          <div class="divs"><img alt="14" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/14.jpg"/></div>
          <div class="divs"><img alt="15" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/15.jpg"/></div>
          <div class="divs"><img alt="16" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/16.jpg"/></div>
          <div class="divs"><img alt="17" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/17.jpg"/></div>
          <div class="divs"><img alt="18" src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/18.jpg"/></div>


</div>
</div>
    
<Footer/>
      </Container>
    )
      }

export default Galeria