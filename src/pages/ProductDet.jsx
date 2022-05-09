import React, { useEffect } from 'react'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const ProductDet = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar/> 
        <Details/> 
        <Footer/>
    </div>
  )
}

export default ProductDet