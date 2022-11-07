import React, {useEffect, useState} from 'react'
import CategoryItem from './CategoryItem'
import styled from "styled-components"
import DataServices from '../services/DataServices'
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
padding: 35px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}

`

const Categories = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getAllCategories().then((response) => {
       setPost(response.data);
     });
   }, []);
   
  return (
    <Container>
       {post.map((product) => (
              <CategoryItem item={product} key={product.id} />
        ))}
    </Container>
  )

}

export default Categories