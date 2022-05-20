import React, {useState, useEffect } from 'react'
import '../Gallery.css';
import styled from 'styled-components'
import Footer from './Footer';


const Nav = styled.h1`
font-size: 28px;
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
          <div class="divs"><img src="https://github.com/ppulut/Inzynierka/blob/master/galeria/1.jpg?raw=true"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/2.jpg?token=GHSAT0AAAAAABTVTFI5LHL5KNG4QJQ7KTXKYUHOG6A"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/3.jpg?token=GHSAT0AAAAAABTVTFI4DBHX4LNQPZ3SIKVUYUHOLDA"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/5.jpg?token=GHSAT0AAAAAABTVTFI4VTZ4G6YTKC6X4AFOYUHOLFQ"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/6.jpg?token=GHSAT0AAAAAABTVTFI46AD5A6DLGUHQMW6WYUHOLGQ"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/7.jpg?token=GHSAT0AAAAAABTVTFI5MV7OPCSQMUNTM646YUHOUWA"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/8.jpg?token=GHSAT0AAAAAABTVTFI4LD3GRAWOGAOYYKLWYUHOUXQ"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/9.jpg?token=GHSAT0AAAAAABTVTFI53ZKCOOMMC5HOBYTGYUHOUZA"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/10.jpg?token=GHSAT0AAAAAABTVTFI4Z4QVQVYMLRTOJDQSYUHOU2A"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/11.jpg?token=GHSAT0AAAAAABTVTFI4EO5LW6NEVKBSGGZSYUHOU3Q"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/12.jpg?token=GHSAT0AAAAAABTVTFI5ZM24RPSEK433YTMUYUHOU5A"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/13.jpg?token=GHSAT0AAAAAABTVTFI5O7JXSURXD4PP3Q52YUHOU7Q"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/14.jpg?token=GHSAT0AAAAAABTVTFI4JKWG7JOBJP5L6YS2YUHOVBA"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/15.jpg?token=GHSAT0AAAAAABTVTFI4SYFBKMZR2562HZKEYUHOVCA"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/16.jpg?token=GHSAT0AAAAAABTVTFI52C4D7CVW2LQDSYBWYUHOVDQ"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/17.jpg?token=GHSAT0AAAAAABTVTFI5WOJRQQIGOF76N5J4YUHOVFA"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/18.jpg?token=GHSAT0AAAAAABTVTFI4EBUMXGQE44FCZUF2YUHOVGA"/></div>
  <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/4.jpg?token=GHSAT0AAAAAABTVTFI4HNEJ2RTUC5JVP6HMYUHOLEQ"/></div>


</div>
</div>
    
<Footer/>
      </Container>
    )
      }

export default Galeria