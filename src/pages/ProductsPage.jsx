import React, { useEffect } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'



const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Announcement/>
        <Navbar/> 
        <Products/> 
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductsPage