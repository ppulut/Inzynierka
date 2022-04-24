import styled from 'styled-components'
import React, { useState } from 'react'


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

const Link = styled.a`
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
    <Container>
    <Wrapper>
        <Title>ZALOGUJ SIĘ</Title>
        <Form>
            <Input placeholder="Login"
            value={login}
            onChange={(e)=>setLogin(e.target.value)}
            />
            <Input placeholder="Hasło"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          <Button>ZALOGUJ</Button>
          <Link>NIE PAMIĘTASZ HASŁA?</Link>
          <Link>UTWÓRZ NOWE KONTO</Link>
        </Form>
    </Wrapper>

</Container>
  )
}

export default Login
