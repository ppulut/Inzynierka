import React, { } from 'react'
import { useLocation } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import DETALE from './DETALE'


const ProductDet = () => {

 const location = useLocation()

 const {product_item} = location.state

  return (
    <main>
        <Navbar/> 
        <DETALE product_item ={product_item}/>
        <Footer/>
    </main>
  )
}

export default ProductDet