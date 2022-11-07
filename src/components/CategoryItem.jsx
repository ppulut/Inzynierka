import React, { useEffect } from 'react';
import styled, {css} from "styled-components"
import {Link } from "react-router-dom";
import { mobile } from "../responsive";
import '../App.css';



const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 5px;
height: 70vh;
width:100%;
position: relative; 


transform: translate(0%);
transition: 0.3s ease-out;
display:block;
    

    ${props => props.animated && css`
    &:hover {
      transform: translate(0%, -10%);
      transition: 0.3s ease-out;
    }
  `}
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "40vh", width:"100%" })}

`


const Tytul = styled.h1`
color: white;
margin-bottom: 5px;
${mobile({ height: "40vh", width:"100%" })}
`

const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;
border-radius: 4%;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`




const CategoryItem = ({item}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <Container animated>
      
      <Image src={item.img}/>
        <Info>
            <Tytul>{item.title}</Tytul>
            
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}}
             to={`/${item.link}`}>
            <Button>PRZEJDŹ</Button>
                  </Link>          
            
            </Info>
    </Container>



  )
}

export default CategoryItem