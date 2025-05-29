import { useState } from 'react'
import './App.css'
import Hero from './compenents/Hero'
import Navbar from './compenents/Navbar'
import About from './compenents/About'
import ParralaxGallery from './compenents/ParallaxGallery'
import Committees from './compenents/Committees'

function App() {
  return(
    <div className='w-screen h-full overflow-x-hidden flex flex-col'>
      <Navbar/>
      <Hero/>
      <About/>
      <ParralaxGallery/>
      <Committees/>
    </div>
  )
}

export default App
