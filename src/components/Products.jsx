import React, {useEffect, useState} from 'react'
import DataServices from '../services/DataServices'
import styled from 'styled-components'
import Product from './Product'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
padding: 35px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
${mobile({ width: "80%" })}
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2);
`

const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
`


const Products = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getAllProducts().then((response) => {
       setPost(response.data);
     });
   }, []);
   
  return (
    <div>
      <Nav>Oferowane produkty</Nav>
    <Container>
       {post.map((product) => (
              <Product item={product} key={product.id} />
        ))}
    </Container>
    </div>
  )
}

export default Products
