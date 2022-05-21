import React, {useState, useEffect } from 'react'
import '../Gallery.css';
import styled from 'styled-components'
import Footer from './Footer';


const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
`

const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
width:100%;
position: relative; 
left:110px;
  `




const Galeria = () => {

    return (
        <Container>
          <Nav>Galeria</Nav>
          <div class="con">
          <div class="uls">
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/1.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/2.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/3.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/4.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/5.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/6.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/7.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/8.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/9.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/10.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/11.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/12.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/13.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/14.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/15.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/16.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/17.jpg"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/18.jpg"/></div>


</div>
</div>
    
<Footer/>
      </Container>
    )
      }

export default Galeria