import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import Categories from './Categories'
import About from './About'
import PopularMenu from './PopularMenu'
import SectionTitle from '../../Components/SectionTitle'
import CallUs from './CallUs'

function Home() {
  const [menu, setMenu] = useState([]);
  useEffect(()=>{
    fetch('./menu.json')
    .then(res => res.json())
    .then(data => {
      const popularItem = data.filter(item => item.category == 'popular')
      setMenu(popularItem)
    })
  },[])
  return (
    <div className="w-full">
      <Slider/>
      <div className='w-3/4 mx-auto mt-10'>
      <Categories/>
      <About/>
      <SectionTitle heading={'From Our Menu'} subHeading={'Check it out'}/>
      <div className='grid grid-cols-2 gap-8 my-10'>

      {
        menu.map(item => <PopularMenu key={item._id} item={item}/>)
      }
      </div>
      <div className='text-center mb-10'>

      <button className='btn btn-secondary'>View Full Menu</button>
      </div>
      <CallUs/>
      <div className='mb-10'> 

      <SectionTitle heading={'Should Try'} subHeading={'Should Try'}/>
      </div>
      </div>
    </div>
  )
}

export default Home