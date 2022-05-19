import React, {useState, useEffect } from 'react'
import '../Gallery.css';
import DataServices from '../services/DataServices'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Galeria from '../components/Galeria';
import Newsletter from '../components/Newsletter';



const Gallery = () => {

    return (
       <div>
            <Navbar/>
            <Galeria/>
            <Newsletter/>
            </div>
    )
      }

export default Gallery