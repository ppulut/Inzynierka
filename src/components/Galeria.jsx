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
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/1.jpg?token=GHSAT0AAAAAABTVTFI4J7TJERWQIT7JESJ6YUHOG3Q"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/2.jpg?token=GHSAT0AAAAAABTVTFI5LHL5KNG4QJQ7KTXKYUHOG6A"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/3.jpg?token=GHSAT0AAAAAABTVTFI4DBHX4LNQPZ3SIKVUYUHOLDA"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/4.jpg?token=GHSAT0AAAAAABTVTFI4HNEJ2RTUC5JVP6HMYUHOLEQ"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/5.jpg?token=GHSAT0AAAAAABTVTFI4VTZ4G6YTKC6X4AFOYUHOLFQ"/></div>
          <div class="divs"><img src="https://raw.githubusercontent.com/ppulut/Inzynierka/master/galeria/6.jpg?token=GHSAT0AAAAAABTVTFI46AD5A6DLGUHQMW6WYUHOLGQ"/></div>
          <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
          <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>
  <div class="divs"><img src="https://www.new-nails.com/wp-content/uploads/2017/01/kurs-zdobienia-paznokci-barok.jpg"/></div>

</div>
</div>
    
<Footer/>
      </Container>
    )
      }

export default Galeria