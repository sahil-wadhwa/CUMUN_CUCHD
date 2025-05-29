import { useState } from 'react'
import './App.css'
import Hero from './compenents/Hero'
import Navbar from './compenents/Navbar'
import About from './compenents/About'
import ParralaxGallery from './compenents/ParallaxGallery'
import Committees from './compenents/Committees'
import Footer from './compenents/Footer'
import Registration from './compenents/Registration'

function App() {
  return(
    <div className='w-screen h-full overflow-x-hidden flex flex-col'>
      <Navbar/>
      <Hero/>
      <About/>
      <ParralaxGallery/>
      <Committees/>
      <Registration/>
      <Footer/>
    </div>
  )
}

export default App
