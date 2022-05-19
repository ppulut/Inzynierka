import React, { useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import DETALE from './DETALE'


const ProductDet = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


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