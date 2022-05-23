import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DataServices from '../services/DataServices'
import styled from 'styled-components'
import SERVICE from './SERVICE'
import "../ServiceDesign.css"
import { mobile } from "../responsive";

const Container = styled.div`
${mobile({ textAlign: "center" })}
${mobile({ width: "80%" })}

`
const Nav = styled.h1`
font-size: 36px;
color: rgb(26, 26, 26);
font-weight: bold;
padding:30px;
margin: 4px 12px 8px
${mobile({ textAlign: "center" })}
${mobile({ width: "80%" })}
`

const Services = () => {

  
  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getServices().then((response) => {
       setPost(response.data);
     });
   }, []);
   
  return (
    <Container>
        <Navbar/>
        <Nav>Usługi</Nav>
        <section class="section services-section" id="services">
    <div class="hede">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>Czym się zajmuję</h2>
                    <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
                </div>
            </div>
        </div>
        </div>
        </section>
       {post.map((product) => (
              <SERVICE item={product} key={product.id} />
        ))}
        <Footer/>
    </Container>
  )
}

export default Services
