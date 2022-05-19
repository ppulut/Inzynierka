import React, {useEffect } from 'react'
import '../Gallery.css';
import Navbar from '../components/Navbar'
import Galeria from '../components/Galeria';



const Gallery = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


    return (
       <div>
            <Navbar/>
            <Galeria/>
            </div>
    )
      }

export default Gallery