import React from 'react'
import SectionTitle from '../../Components/SectionTitle'

function PopularMenu({item}) {
  const {name, image, recipe, price} = item;
  return (
    <div className='flex gap-3 items-center'>
        <img src={image} className='w-28 h-24' style={{borderRadius:'0 200px 200px 200px'}} />
        <div>
          <h2 className='uppercase'>{name} -------------</h2>
          <p>{recipe}</p>
        </div>
        <p className='text-orange-400'>${price}</p>
    </div>
  )
}

export default PopularMenu