import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
display: flex;
padding: 35px;
justify-content: space-between;
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2);
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=> (
          <Product item={item} key={item.id} />

        
      ))}
    </Container>
  )
}

export default Products
