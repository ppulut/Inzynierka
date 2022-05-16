import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ProductDetails from './ProductDetails'
import DataServices from '../services/DataServices'

const Container = styled.div`
display: flex;
padding: 35px;
`

const Details = () => {
    
  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getProductById().then((response) => {
       setPost(response.data);
     });
   }, []);
   
  return (
    <Container>
       {post.map((details) => (
              <ProductDetails item={details}/>
        ))}
    </Container>
  )
}

export default Details
