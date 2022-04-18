import styled from 'styled-components'
import React from 'react'


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
width: 40%;
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

const Register = () => {
  return (
  <Container>
      <Wrapper>
          <Title>UTWÓRZ KOTNO</Title>
          <Form>
              <Input placeholder="Imię"/>
              <Input placeholder="Nazwisko"/>
              <Input placeholder="Login"/>
              <Input placeholder="Hasło"/>
              <Input placeholder="Potwierdź hasło"/>
            <Button>Utwórz</Button>
          </Form>
      </Wrapper>

  </Container>
  )
}

export default Register
