import React from 'react'
import Slider from './Slider'
import Categories from './Categories'
import About from './About'

function Home() {
  return (
    <div className="w-full">
      <Slider/>
      <div className='w-3/4 mx-auto'>
      <Categories/>
      <About/>
      </div>
    </div>
  )
}

export default Home