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