import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import {Link } from "react-router-dom";
import DataServices from '../services/DataServices';

const Container = styled.div`
display: flex;
padding: 35px;
justify-content: space-between;
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2);
`

const Products = () => {


  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    DataServices.getAllProducts().then((response) => {
      setProduct(response.data);
     });
   }, []);


    return (
        <Container>
          {product.map((item) => (
          <Link to={"/"+item.title } state={{ from: item.product_id }}>
            <Product item={item} key={item.id} />
          </Link>
          ))}
        </Container>
      );
}

export default Products
