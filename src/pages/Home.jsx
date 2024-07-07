import React from 'react'
import Hero from '../components/Hero'
import Product from './Product'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='container mx-auto' >
      <Hero/>
      <Product/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
