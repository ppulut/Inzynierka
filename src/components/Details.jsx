import React from 'react'
import styled from 'styled-components'
import { productDetails } from '../data'
import ProductDetails from './ProductDetails'

const Container = styled.div`
display: flex;
padding: 35px;
`

const Details = () => {
    
  return (
    <Container>
      {productDetails.map(item=> (
          <ProductDetails item={item} key={item.id} />

        
      ))}
    </Container>
  )
}

export default Details
