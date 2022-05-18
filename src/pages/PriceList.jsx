import React, {useState, useEffect } from 'react'

import DataServices from '../services/DataServices'
import styled from 'styled-components'
import PRICES from './PRICES'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Container = styled.div`

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
         {post.map((product) => (
                <PRICES item={product} key={product.id} />
          ))}
          <Footer/>
      </Container>

    )
      }

export default PriceList