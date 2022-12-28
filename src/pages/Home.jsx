import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import NEWS from '../components/NEWS'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/> 
        <Slider/>  
        <Categories/> 
        
        <NEWS/>
        <Footer/>
    </div>
  )
}

export default Home