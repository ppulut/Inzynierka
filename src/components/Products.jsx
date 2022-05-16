import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import DataServices from '../services/DataServices'
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
  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getAllProducts().then((response) => {
       setPost(response.data);
     });
   }, []);
   
  return (
    <Container>
       {post.map((product) => (
              <Product item={product} key={product.id} />
        ))}
    </Container>
  )
}

export default Products
