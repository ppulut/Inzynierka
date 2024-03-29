import styled from 'styled-components'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Alert} from "react-bootstrap";

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

const Alerto = styled.div`
margin: 20px 10px 0px 0px;
padding: 10px;
border: none;

`

const Register = () => {

  const[name,setName]=useState('')
  const[surname,setSurname]=useState('')
  const[login,setLogin]=useState('')
  const[password,setPassword]=useState('')
  const[repassword,setRePassword]=useState('')
  const [show, setShow] = useState(false);

  const handleClick=(e)=>{
    e.preventDefault()
    const user={name,surname,login,password,repassword}
    console.log(user)

 fetch("http://localhost:8080/users/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

  }).then((confirm)=>{
    console.log("New user added")
    setShow(true);
  })
}

  return (
   <div>
     <Navbar/> 
  <Container>
      <Wrapper>
          <Title>UTWÓRZ KOTNO</Title>
          <Form>
              <Input placeholder="Imię" required 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
              />
              <Input placeholder="Nazwisko" required 
                            value={surname}
                            onChange={(e)=>setSurname(e.target.value)}
              />
              <Input placeholder="Login" required 
                            value={login}
                            onChange={(e)=>setLogin(e.target.value)}
              />
              <Input type="password" placeholder="Hasło" required 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
              />
              <Input type="password" placeholder="Potwierdź hasło" required 
                            value={repassword}
                            onChange={(e)=>setRePassword(e.target.value)}
              />
            <Button variant="success" onClick={handleClick}>Utwórz</Button>
            {show && (
            <Alerto><Alert variant="success" onClose={() => setShow(true)}>
              Zarejestrowano pomyślnie
          </Alert></Alerto>
            )}
          </Form>
      </Wrapper>

  </Container>
  <Footer/>
  </div> 
  )
}

export default Register
