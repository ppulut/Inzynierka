import React, {useState, useEffect } from 'react'

import DataServices from '../services/DataServices'
import styled from 'styled-components'
import PRICES from './PRICES'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Container = styled.div`

`
const Nav = styled.h1`
font-size: 28px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
`

const PriceList = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
      DataServices.getPrices().then((response) => {
         setPost(response.data);
       });
     }, []);
     
    return (
      <Container>
          <Navbar/>
          <Nav>Cennik naszych usług</Nav>
         {post.map((product) => (
                <PRICES item={product} key={product.id} />
          ))}
          <Footer/>
      </Container>

    )
      }

export default PriceList