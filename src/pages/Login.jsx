import styled from 'styled-components'
import React, { useState } from 'react'
import {Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Container = styled.div`
width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://villanailsmonroe.com/images/front/Front002.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Wrapper = styled.div`
width: 30%;
  padding: 20px;
  background-color: white;
  
`

const Form = styled.form`
display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Input = styled.input`
flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Button = styled.button`
width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
border: none;
border-radius:50px;
background-color: lightpink;
color: white;
cursor: pointer;
`

const Menu = styled.a`
margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color:gray
`


const Login = () => {
  const[login,setLogin]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div>
      <Navbar/>
    <Container>
    <Wrapper>
        <Title>ZALOGUJ SIĘ</Title>
        <Form>
            <Input placeholder="Login"
            value={login}
            onChange={(e)=>setLogin(e.target.value)}
            />
            <Input type="password" placeholder="Hasło"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          <Button>ZALOGUJ</Button>

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Login"}>
              <Menu>NIE PAMIĘTASZ HASŁA?</Menu>
                  </Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={"/Register"}>
              <Menu>UTWÓRZ NOWE KONTO</Menu>
                  </Link>
        </Form>
    </Wrapper>

</Container>
<Footer/>
</div>
  )
}

export default Login
