import {ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import {Link } from "react-router-dom";
import { mobile } from '../responsive';


  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  ${mobile({ width: "80%" })}
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;

`;

const NamePrice = styled.div`
margin: 4px 12px 8px;
position: absolute;
bottom:0;
width: 100%;
height: 20%;
display: flex;

margin-top: 3px;

`


const Name = styled.h2`
display: flex;
width: 100%;
height: 10%;
position: absolute;
padding:10px;
background-color: white;

`

const Desc = styled.h2`
display: none;


`

const Price = styled.h2`
display: flex;
width: 100%;
height: 10%;
position: absolute;
bottom:0;
font-size: 18px;
line-height: 20px;
color: rgb(26, 26, 26);
font-weight: normal;
text-decoration: none;
margin: 4px 12px 8px
`


const Product = ({item}) => {
  console.log(item.product_id)
  return (
    <Container>
      <Image src={item.img}/>
      <NamePrice>
      <Name>{item.title}</Name>
      <Price>{item.price}</Price>
      <Desc>{item.opis}</Desc>
      </NamePrice>
      <Info>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}}
      to={"/ProductDet/"+item.product_id} state={{product_item:item}}>
        <Icon>
         DODAJ <ShoppingCartOutlined />
        </Icon>
        </Link>     
      </Info>
    </Container>
  )
}

export default Product
