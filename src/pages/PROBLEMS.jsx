import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProblemSolved from '../components/ProblemSolved'
import DataServices from '../services/DataServices'


const PROBLEMS = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [post, setPost] = useState([]);

  useEffect(() => {
    DataServices.getProblems().then((response) => {
       setPost(response.data);
     });
   }, []);
  return (
    <div>
        <Announcement/>
        <Navbar/> 
        {post.map((product) => (
              <ProblemSolved item={product} key={product.id} />
        ))}
        <Footer/>
    </div>
  )
}

export default PROBLEMS