import React from 'react'
import featured from '../../assets/home/featured.jpg'

function About() {
  return (
    <div className='mt-20 mb-10 p-20' style={{background:`url(${featured})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className='bg-white p-16 text-center'>
            <h2 className='text-3xl uppercase mb-6'>Bistro Boss</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto, quis animi quaerat facilis nulla sed atque quo placeat delectus, vero alias quos ea sequi!</p>
        </div>
    </div>
  )
}

export default About