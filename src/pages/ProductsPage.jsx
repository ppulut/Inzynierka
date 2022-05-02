import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'



const ProductsPage = () => {
  return (
    <div>
        <Navbar/> 
        <Products/> 
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductsPage