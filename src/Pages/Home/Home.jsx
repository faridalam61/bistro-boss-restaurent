import React from 'react'
import Slider from './Slider'
import Categories from './Categories'
import About from './About'
import PopularMenu from './PopularMenu'

function Home() {
  return (
    <div className="w-full">
      <Slider/>
      <div className='w-3/4 mx-auto mt-10'>
      <Categories/>
      <About/>
      <PopularMenu/>
      </div>
    </div>
  )
}

export default Home