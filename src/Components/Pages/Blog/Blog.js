import React from 'react'
import Navbar from '../../Header/Navbar/Navbar'
import Footer from '../../Footer/Footer';
import BF1 from '../../Frames/BlogFrame/BF1/BF1';
import BF4 from '../../Frames/BlogFrame/BF4/BF4';


const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BF1/>
        <BF4/>
        <Footer/>
    </div>
  )
}

export default Blog
