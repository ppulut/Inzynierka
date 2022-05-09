import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/> 
        <Slider/>  
        <Categories/> 
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home