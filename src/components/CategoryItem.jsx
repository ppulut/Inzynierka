import React from 'react'
import styled from "styled-components"
import {Link } from "react-router-dom";


const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
position: relative; 

`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Tytul = styled.h1`
color: white;
margin-bottom: 5px;

`

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
border-radius: 4%;

`




const CategoryItem = ({item}) => {
  return (
    <Container>
      
      <Image src={item.img}/>
        <Info>
            <Tytul>{item.title}</Tytul>
            
            <Link
             to={"/ProductsPage"}>
            <Button>PRZEJDŹ</Button>
                  </Link>          
            
            </Info>
    </Container>



  )
}

export default CategoryItem